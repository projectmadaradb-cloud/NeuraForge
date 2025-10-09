import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Test Redis connection
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
    
    if (!redisUrl || !redisToken) {
      return NextResponse.json({
        success: false,
        error: 'Redis not configured',
        details: {
          hasUrl: !!redisUrl,
          hasToken: !!redisToken,
          urlStart: redisUrl?.substring(0, 30) + '...',
        }
      });
    }

    // Try to connect to Redis
    const { Redis } = await import('@upstash/redis');
    const redis = new Redis({
      url: redisUrl,
      token: redisToken,
    });
    
    // Test a simple operation
    await redis.set('test-key', 'test-value', { ex: 10 });
    const testValue = await redis.get('test-key');
    
    return NextResponse.json({
      success: true,
      message: 'Redis connection successful',
      testResult: testValue === 'test-value'
    });
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Redis connection failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}