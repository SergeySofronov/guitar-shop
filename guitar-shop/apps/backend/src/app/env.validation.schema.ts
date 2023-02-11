import { envAppPortSchema, envFileUploadSchema, envJwtSchema } from '@guitar-shop/core';
import Joi from 'joi';

export const envValidationSchema = Joi.object()
  .concat(envAppPortSchema)
  .concat(envJwtSchema)
  .concat(envFileUploadSchema)
