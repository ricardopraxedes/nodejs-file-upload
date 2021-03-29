import { Category } from "../model/Category";

class CategoryRepository {
  private categories: Category[];

  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new CategoryRepository();
    }

    return this.INSTANCE;
  }

  create(name: string, description: string) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }

  findByName(name: string): boolean {
    return this.categories.some((category) => category.name === name);
  }

  list(): Category[] {
    return this.categories;
  }
}
export { CategoryRepository };
