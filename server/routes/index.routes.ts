import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

router.get('/api', productController.getAllProducts);
router.patch('/api/:productid', productController.editProductById);

export default router;
