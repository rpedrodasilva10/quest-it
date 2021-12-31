import { Router } from 'express';
import AuthController from './controllers/AuthController';
import ChildController from './controllers/ChildController';
import ParentController from './controllers/ParentController';
import QuestController from './controllers/QuestController';
import authMiddleware from './middlewares/auth';

const router = Router();

router.post('/authenticate', AuthController.authenticate);
router.post('/parents', ParentController.createParent);

router.use(authMiddleware);

router.get('/parents', ParentController.getAllParents);
router.get('/parents/:id', ParentController.getParentById);

router.post('/children', ChildController.createChild);
router.get('/parents/:id/children', ParentController.getChildren);

router.get('/parents/:id/quests', QuestController.getAllQuestsByParent);
router.post('/parents/:id/quests', QuestController.createQuest);
router.get('/quests', QuestController.getAllQuests);
router.post('/quests/:id/start', QuestController.startQuest);
router.post('/quests/:id/finish', QuestController.finishQuest);

export default router;
