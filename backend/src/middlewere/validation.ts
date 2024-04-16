import { NextFunction , Request,Response} from "express";
import { body, validationResult } from "express-validator";
const handleValidationError =async (req: Request, res: Response,next:NextFunction)=>{
const error=validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });

  }
  next();
};
export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("name must be a string"),
  body("addressLine1")
    .isEmail()
    .notEmpty()
    .withMessage("addressLine1 must be a sting"),
  body("city").isString().notEmpty().withMessage("city must be a string"),
  body("country").isString().notEmpty().withMessage("role must be a string"),
handleValidationError,
];
