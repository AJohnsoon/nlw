import { Request, Response } from "express";
import { resolve } from 'path';
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import SendMailService from "../services/SendMailService";
import AppError from "../errors/AppError";


class SendEmailController {
    async execute(req: Request, res: Response) {
        const { email, survey_id } = req.body;

        const usersRepository = getCustomRepository(UsersRepository)
        const surveysRepository = getCustomRepository(SurveysRepository)
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const usersAlreadExists = await usersRepository.findOne({ email })

        if (!usersAlreadExists) {
            throw new AppError("User not found or does not exists") //error personalizado
        }

        const surveysAlreadExists = await surveysRepository.findOne({ id: survey_id })

        if (!surveysAlreadExists) {
            return res.status(400).json({
                error: "Survey not found or does not exists"
            })
        }
        
        const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs")

        const surveyUserAlreadExists = await surveysUsersRepository.findOne({
            where: {user_id: usersAlreadExists.id, value: null},
            relations: ["user", "survey"]
        });

        const variables = {
            name: usersAlreadExists.name,
            title: surveysAlreadExists.title,
            description: surveysAlreadExists.description,
            id: '',
            link: process.env.URL_MAIL
        }

        if(surveyUserAlreadExists){
            variables.id = surveyUserAlreadExists.id;
            await SendMailService.execute(email, surveysAlreadExists.title, variables, npsPath )
            return res.json(surveyUserAlreadExists)
        }

        //salvar na tabela
        const surveyUser = surveysUsersRepository.create({
            user_id: usersAlreadExists.id,
            survey_id
        })
        
        await surveysUsersRepository.save(surveyUser)
        //enviar email para usuario


        variables.id = surveyUser.id;
        await SendMailService.execute(email, surveysAlreadExists.title, variables, npsPath);

        return res.json(surveyUser)
    }
}

export { SendEmailController }