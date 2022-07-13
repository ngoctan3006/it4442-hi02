import express from 'express';
import { getWorks } from '../controllers/work';

const router = express.Router();

router.get('/', getWorks);

export default router;
