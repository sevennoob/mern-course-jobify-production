import { StatusCodes } from "http-status-codes";
import CustomerAPIError from "./custom-api.js";

class BadRequestError extends CustomerAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
