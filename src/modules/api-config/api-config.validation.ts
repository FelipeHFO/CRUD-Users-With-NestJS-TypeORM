import { bool, number, object, string } from 'joi';

export const validationSchema = object({
  API_PORT: number().required(),
  TYPEORM_HOST: string(),
  TYPEORM_PORT: number().required(),
  TYPEORM_LOGGING: bool().required(),
  TYPEORM_DATABASE: string().required(),
  TYPEORM_USERNAME: string().required(),
  TYPEORM_PASSWORD: string().required(),
  TYPEORM_MIGRATIONS: string().required(),
  TYPEORM_CONNECTION: string().required(),
  TYPEORM_MIGRATIONS_RUN: bool().required(),
  TYPEORM_MIGRATIONS_DIR: string().required(),
});
