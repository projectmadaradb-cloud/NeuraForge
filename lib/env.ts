import { z } from 'zod';

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid PostgreSQL connection string'),
  
  // DeepSeek API (required for ARA)
  DEEPSEEK_API_KEY: z.string().min(1, 'DEEPSEEK_API_KEY is required for research functionality'),
  DEEPSEEK_BASE_URL: z.string().url().default('https://api.deepseek.com'),
  
  // SerpAPI for web search
  SERPAPI_KEY: z.string().optional(),
  
  // Redis for job queue
  UPSTASH_REDIS_REST_URL: z.string().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
  
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
  
  // Optional blob storage
  BLOB_READ_WRITE_TOKEN: z.string().optional(),
  
  // App config
  NEXTAUTH_SECRET: z.string().min(32, 'NEXTAUTH_SECRET should be at least 32 characters').optional(),
  NEXTAUTH_URL: z.string().url().optional(),
  
  // Node environment
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  
  // ARA feature flag
  ARA_ENABLED: z.string().default('true'),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(): Env {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(
        (err) => `${err.path.join('.')}: ${err.message}`
      );
      
      console.error('❌ Invalid environment variables:');
      errorMessages.forEach((msg) => console.error(`  - ${msg}`));
      
      throw new Error(
        `Environment validation failed:\n${errorMessages.join('\n')}`
      );
    }
    throw error;
  }
}

export function getEnvWarnings(): string[] {
  const warnings: string[] = [];
  
  if (!process.env.SERPAPI_KEY) {
    warnings.push('SERPAPI_KEY not set - using fallback search method');
  }
  
  if (!process.env.UPSTASH_REDIS_REST_URL) {
    warnings.push('Redis not configured - using simple job queue');
  }
  
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    warnings.push('Blob storage not configured - PDFs will stream inline only');
  }
  
  return warnings;
}

// Call validation on module load in production
if (process.env.NODE_ENV === 'production') {
  validateEnv();
}