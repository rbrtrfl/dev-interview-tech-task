import { Request, Response } from 'express';
import AppDataSource from '../data-source';
import Tea from '../entity/Tea';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await AppDataSource.manager.find(Tea);
    res.status(200).send({ data: allProducts });
  } catch (error) {
    res.send({ error });
  }
};

const editProductById = async (req: Request, res: Response) => {
  try {
    console.log(typeof Number(req.params.productid));
    const productById = await AppDataSource.manager.findOne(Tea, {
      where: {
        id: Number(req.params.productid),
      },
    });
    res.status(200).send({ data: productById });
  } catch (error) {
    res.send({ error });
  }
};

export default {
  getAllProducts,
  editProductById,
};
