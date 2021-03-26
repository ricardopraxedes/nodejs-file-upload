import { CategoryRepository } from "../../repository/CategoriesRepository";
import { UploadFileController } from "./UploadFileController";
import { UploadFileUseCase } from "./UploadFileUseCase";

const categoryRepository = CategoryRepository.getInstance();

const uploadFileUseCase = new UploadFileUseCase(categoryRepository);

const uploadFileController = new UploadFileController(uploadFileUseCase);

export { uploadFileController };
