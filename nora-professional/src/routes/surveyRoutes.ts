import express from 'express';
import { createSurvey, calculateSurveyValue } from '../controllers/SurveyController';

const router = express.Router();

router.post('/surveys', createSurvey);
router.get('/surveys/:encuestaId/value', calculateSurveyValue);

export default router;
