import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaService } from './database/prisma/prisma.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, /*{snapshot: true,}*/)
  const prismaService = app.get(PrismaService);
  
  await prismaService.enableShutdownHooks(app);

  app.setGlobalPrefix(process.env.GLOBAL_PREFIX)
  app.enableCors()
  await app.listen(process.env.PORT)
  console.log(process.env.PORT)
}
bootstrap()