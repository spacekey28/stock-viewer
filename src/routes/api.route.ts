import { Router } from 'express';
import ApiController from '@controllers/api.controller';
import { Routes } from '@interfaces/routes.interface';

class ApiRoute implements Routes {
  public path = '/';
  public router = Router();
  public apiController = new ApiController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}api`, this.apiController.getApi);
  }
}

export default ApiRoute;
