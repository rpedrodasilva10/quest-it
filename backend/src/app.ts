import cors from 'cors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import Joi from 'joi';
import AppError from './errors/AppError';
import router from './routes';

const PORT = process.env.SERVER_PORT || 8080;
const API_BASE_URL = process.env.SERVER_BASE_URL || '/api/v1';

const app = express();

interface FieldErrorDetail {
  field: string;
  description: string;
}

app.use(express.json());
app.use(cors());
app.use(API_BASE_URL, router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  if (err instanceof Joi.ValidationError) {
    console.error('Joi validation error', err);
    return response.status(400).json({
      status: 'error',
      message: 'Invalid input data, check the errors object for more information',
      errors: err.details.map((error) => {
        const fieldErrorDetails: FieldErrorDetail = {
          field: error.context.key,
          description: error.message.replace('"', '').replace('"', ''),
        };
        return fieldErrorDetails;
      }),
    });
  }

  console.error('An error has ocurred: ', err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(PORT, () => console.log(`✔ Quest It backend is listening on port ${PORT}`));
