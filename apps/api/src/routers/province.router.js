import { Router } from 'express';
import { getAllProvinceController } from '../controllers/province.controller';

const provinceRouter = Router();

provinceRouter.get('/', getAllProvinceController);

export { provinceRouter };
