import { Router } from "express";
import multer from "multer";
import { listCategoryController } from "./category/useCases/list";
import { uploadFileController } from "./category/useCases/upload";

const categoryRoutes = Router();
const upload = multer({ dest: "./tmp" });

categoryRoutes.post("/upload", upload.single("file"), (request, response) => {
  return uploadFileController.handle(request, response);
});

categoryRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoryRoutes };
