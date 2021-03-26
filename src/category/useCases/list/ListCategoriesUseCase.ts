import { Category } from "../../model/Category";
import { CategoryRepository } from "../../repository/CategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  execute(): Category[] {
    return this.categoryRepository.list();
  }
}

export { ListCategoryUseCase };
