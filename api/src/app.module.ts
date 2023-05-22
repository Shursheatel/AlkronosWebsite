import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SpecialOffersModule } from './specialOffers/specialOffers.module';

@Module({
  imports: [
    AuthModule,
    SpecialOffersModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
