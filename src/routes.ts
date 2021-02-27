import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';
import { SendEmailController } from './controllers/SendMailController';
import AnswerController from './controllers/AnswerController';
import NpsController from './controllers/NpsController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendEmailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);
router.get("/users", userController.show);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendmail", sendMailController.execute);


router.get("/answers/:value", answerController.execute);
router.get("/nps/:survey_id", npsController.execute)

export { router }