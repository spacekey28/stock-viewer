import { NextFunction, Request, Response } from 'express';
import path from 'path';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      // res.sendStatus(200);
      res.sendFile(path.resolve('./') + '/frontend/dist/index.html');
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
