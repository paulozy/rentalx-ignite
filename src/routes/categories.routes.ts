import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/usecases/createCategory";
import { listCategoriesController } from "../modules/cars/usecases/listCategories";

const categoriesRoutes = Router();

const upload = multer({});

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/import", (req, res) => {});

export { categoriesRoutes };
