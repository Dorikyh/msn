// src/global.d.ts
declare global {
    namespace NodeJS {
      interface Global {
        prisma?: PrismaClient;
        
      }
    }
  }
  