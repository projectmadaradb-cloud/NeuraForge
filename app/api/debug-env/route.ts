import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        // Test exact same validation as the jobs endpoint
        if (!process.env.DATABASE_URL) {
            return NextResponse.json(
                { error: 'DATABASE_URL missing', details: `DATABASE_URL: ${!!process.env.DATABASE_URL}` },
                { status: 503 }
            );
        }

        if (!process.env.DEEPSEEK_API_KEY) {
            return NextResponse.json(
                { error: 'DEEPSEEK_API_KEY missing', details: `DEEPSEEK_API_KEY: ${!!process.env.DEEPSEEK_API_KEY}` },
                { status: 503 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Research environment validation passed',
            details: {
                DATABASE_URL: `${process.env.DATABASE_URL?.substring(0, 30)}...`,
                DEEPSEEK_API_KEY: `${process.env.DEEPSEEK_API_KEY?.substring(0, 10)}...`,
                NODE_ENV: process.env.NODE_ENV
            }
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Validation check failed', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}