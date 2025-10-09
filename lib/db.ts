import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create a function to get or create Prisma client
function createPrismaClient() {
  let databaseUrl = process.env.DATABASE_URL;
  
  // Disable prepared statements for pooled connections to avoid conflicts
  if (databaseUrl) {
    if (databaseUrl.includes('?')) {
      databaseUrl += '&pgbouncer=true&connection_limit=1&prepared_statements=false';
    } else {
      databaseUrl += '?pgbouncer=true&connection_limit=1&prepared_statements=false';
    }
  }
  
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : ['error'],
    datasources: {
      db: {
        url: databaseUrl
      }
    }
  })
}

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Force reconnection function for development
export async function resetPrismaConnection() {
  try {
    console.log('Resetting Prisma connection...');
    if (globalForPrisma.prisma) {
      await globalForPrisma.prisma.$disconnect()
      globalForPrisma.prisma = undefined
    }
    
    // Wait a moment for the connection to fully disconnect
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    globalForPrisma.prisma = createPrismaClient()
    console.log('Prisma connection reset successfully');
    
    return globalForPrisma.prisma
  } catch (error) {
    console.error('Error resetting Prisma connection:', error);
    throw error;
  }
}

// Handle cleanup on process exit
process.on('beforeExit', async () => {
  await prisma.$disconnect()
})

process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  await prisma.$disconnect()
  process.exit(0)
})