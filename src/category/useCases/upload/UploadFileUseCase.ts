import fs from "fs";
import csvParse from "csv-parse";
import { CategoryRepository } from "../../repository/CategoriesRepository";

class UploadFileUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  loadCategories(file: Express.Multer.File): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      const categories: Category[] = [];

      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, description } = category;

      const categoryExists = this.categoryRepository.findByName(name);

      if (!categoryExists) {
        this.categoryRepository.create(name, description);
      }
    });
  }

  // execute(file: Express.Multer.File) {
  //   const stream = fs.createReadStream(file.path);

  //   const parseFile = csvParse();

  //   stream.pipe(parseFile);

  //   parseFile.on("data", async (line) => {
  //     console.log(line);
  //   });
  // }
}
export { UploadFileUseCase };
