import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const categories = this.listCategoryUseCase.execute();

    return response.json(categories);
  }
}

export { ListCategoryController };
