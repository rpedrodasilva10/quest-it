import { Router } from 'express';
import CreateParentController from './controllers/CreateParentController';
import GetParentController from './controllers/GetParentsController';

const router = Router();

router.post('/parents', new CreateParentController().createParent);
router.get('/parents', new GetParentController().getAllParents);
router.get('/parents/:id', new GetParentController().getParentById);

export default router;
