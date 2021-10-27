import { Router } from 'express';
import CreateChildController from './controllers/CreateChildController';
import CreateParentController from './controllers/CreateParentController';
import CreateQuestController from './controllers/CreateQuestController';
import GetChildrenController from './controllers/GetChildrenController';
import GetParentController from './controllers/GetParentsController';
import GetQuestController from './controllers/GetQuestController';

const router = Router();

router.post('/parents', new CreateParentController().createParent);
router.get('/parents', new GetParentController().getAllParents);
router.get('/parents/:id', new GetParentController().getParentById);
router.post('/parents/:id/children', new CreateChildController().createChild);
router.get('/parents/:id/children', new GetChildrenController().getChildrenByParentId);

router.post('/parents/:id/quests', new CreateQuestController().createQuest);

router.get('/quests', new GetQuestController().getAllQuests);

export default router;
