import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Tea } from '../entity/Tea';


const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await AppDataSource.manager.find(Tea);
    console.log(allProducts);
    res.status(200).send({ data: allProducts });
  } catch (error) {
    console.log(error)
    res.send({ error: error });
  }
};

// edit event information: title, desc, max participans & min participants
const editProductById = async (req: Request, res: Response) => {
  try {
    // db logic
    res.status(200).send({ data: 'updated product' });
  } catch (error) {
    res.send({ error: error });
  }
};

export default {
  getAllProducts,
  editProductById
};