import { Router } from 'express';
import {
  addCommentController,
  addNewCakeController,
  deleteCakeController,
  fetchCakesController,
  fetchSingleCakeController,
  updateCakeController
} from '../controllers/cakeControllers.js';
import { isValidMongooseId } from '../middlewares/isValidId.js';
import validateRequest from '../middlewares/ValidateRequest.js';
import { addNewCakeSchema, updateCakeSchema } from '../validators/validators.js';
import { fetchCakeMiddleware } from '../middlewares/fetchCakeMiddleware.js';
var router = Router();

router.get('/cakes', fetchCakesController);
router.get('/cake/:id', isValidMongooseId, fetchCakeMiddleware, fetchSingleCakeController);
router.post('/addcake', validateRequest(addNewCakeSchema), addNewCakeController);
router.put('/cake/:id', isValidMongooseId, validateRequest(updateCakeSchema), fetchCakeMiddleware, updateCakeController);
router.delete('/cake/:id', isValidMongooseId, fetchCakeMiddleware, deleteCakeController);
router.post('/cake/:id/comments', isValidMongooseId, fetchCakeMiddleware, addCommentController);
export default router;
