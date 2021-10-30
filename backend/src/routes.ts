import { Router } from 'express';
import ChildController from './controllers/ChildController';
import ParentController from './controllers/ParentController';
import QuestController from './controllers/QuestController';

const router = Router();

router.post('/parents', ParentController.createParent);
router.get('/parents', ParentController.getAllParents);
router.get('/parents/:id', ParentController.getParentById);

router.post('/children', ChildController.createChild);
router.get('/parents/:id/children', ParentController.getChildren);

router.post('/parents/:id/quests', QuestController.createQuest);
router.get('/quests', QuestController.getAllQuests);
router.post('/quests/:id/start', QuestController.startQuest);

export default router;
