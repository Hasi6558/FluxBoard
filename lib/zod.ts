import { z } from 'zod';

export function assertEnv(key: string): string {
  const val = process.env[key];
  if (val === undefined || val === '') {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return val;
}

export const UUID = z.string().uuid();
export const Id = z.string().min(1);
export const Pagination = z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1).max(100),
});
