import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

export default class AnswerController {
    async execute(req: Request, res: Response){
        const {value} = req.params;
        const { u } = req.query;


        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });
        
        if(!surveyUser){
            throw new AppError("Survey User does not exist")           
        }

        surveyUser.value = Number(value);
        await surveysUsersRepository.save(surveyUser);
        return res.json(surveyUser);
    }
}