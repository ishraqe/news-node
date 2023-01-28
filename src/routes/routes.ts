import express, { Request, Response } from "express";
import { getNewsByKeyword } from "../controller/newsController";

const routes = express.Router();

routes.get("/get/news/:keyword", async (req: Request, res: Response) => {
  try {
    const keyword = req?.params?.keyword;
    const currentPage = Number(req?.query?.page) || 1;
    const result = await getNewsByKeyword(keyword, currentPage);
    res.status(200).json(result);
  } catch (error: unknown) {
    console.log(error);
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    res.status(404).json({ message });
  }
});

export default routes;
