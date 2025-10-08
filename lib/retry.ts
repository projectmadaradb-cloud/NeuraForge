/**
 * Retry utility with exponential backoff
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  options: {
    maxRetries?: number;
    baseDelay?: number;
    maxDelay?: number;
    backoffFactor?: number;
  } = {}
): Promise<T> {
  const {
    maxRetries = 3,
    baseDelay = 1000,
    maxDelay = 10000,
    backoffFactor = 2,
  } = options;

  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }

      const delay = Math.min(
        baseDelay * Math.pow(backoffFactor, attempt),
        maxDelay
      );
      
      console.warn(`Attempt ${attempt + 1} failed, retrying in ${delay}ms:`, error);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError!;
}

/**
 * Fetch with retry and timeout
 */
export async function fetchWithRetry(
  url: string,
  options: RequestInit & { timeout?: number } = {},
  retryOptions?: Parameters<typeof retryWithBackoff>[1]
): Promise<Response> {
  const { timeout = 30000, ...fetchOptions } = options;

  return retryWithBackoff(async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      if (!response.ok && response.status >= 500) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response;
    } finally {
      clearTimeout(timeoutId);
    }
  }, retryOptions);
}

/**
 * DeepSeek API call with retry
 */
export async function deepseekWithRetry<T>(
  fn: () => Promise<T>,
  retryOptions?: Parameters<typeof retryWithBackoff>[1]
): Promise<T> {
  return retryWithBackoff(fn, {
    maxRetries: 3,
    baseDelay: 2000,
    maxDelay: 30000,
    ...retryOptions,
  });
}

/**
 * OpenAI API call with retry (legacy - keeping for compatibility)
 */
export async function openaiWithRetry<T>(
  fn: () => Promise<T>,
  retryOptions?: Parameters<typeof retryWithBackoff>[1]
): Promise<T> {
  return deepseekWithRetry(fn, retryOptions);
}

/**
 * Playwright operation with retry
 */
export async function playwrightWithRetry<T>(
  fn: () => Promise<T>,
  retryOptions?: Parameters<typeof retryWithBackoff>[1]
): Promise<T> {
  return retryWithBackoff(fn, {
    maxRetries: 2,
    baseDelay: 3000,
    maxDelay: 15000,
    ...retryOptions,
  });
}