import { Router } from 'express';
import CreateParentController from './controllers/CreateParentController';

const router = Router();

router.post('/parents', new CreateParentController().createParent);

export default router;
