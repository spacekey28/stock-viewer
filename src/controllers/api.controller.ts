import { NextFunction, Request, Response } from 'express';

class ApiController {
  public getApi = (req: Request, res: Response, next: NextFunction) => {
    try {
      // res.sendStatus(200);
      res.send('You have reached the API!');
    } catch (error) {
      next(error);
    }
  };
}

export default ApiController;
