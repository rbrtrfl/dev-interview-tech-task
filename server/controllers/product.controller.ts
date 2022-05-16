import { Request, Response } from 'express';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    // db logic
    res.status(200).send({ data: 'list of all products' });
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