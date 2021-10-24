import { Router } from 'express';
import CreateChildController from './controllers/CreateChildController';
import CreateParentController from './controllers/CreateParentController';
import GetParentController from './controllers/GetParentsController';

const router = Router();

router.post('/parents', new CreateParentController().createParent);
router.get('/parents', new GetParentController().getAllParents);
router.get('/parents/:id', new GetParentController().getParentById);
router.post('/parents/:id/children', new CreateChildController().createChild);

export default router;
