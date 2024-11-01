import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export const validate = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const simplifiedErrors = error.errors.map((err) => ({
          field: err.path[0],
          message: err.message,
        }));

        res
          .status(400)
          .json({ message: "Validation failed", errors: simplifiedErrors });
        return;
      }

      res.status(500).json({ message: "Server error." });
    }
  };
};
