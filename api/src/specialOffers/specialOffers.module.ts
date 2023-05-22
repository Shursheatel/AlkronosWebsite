import { Module } from '@nestjs/common';                                     
import { DatabaseModule } from 'src/database/database.module';
import { SpecialOffersService } from './specialOffers.service';
import { SpecialOffersController } from './specialOffers.controller';

@Module({
  imports: [DatabaseModule],
  providers: [SpecialOffersService],
  exports: [SpecialOffersService],
  controllers: [SpecialOffersController]
})
export class SpecialOffersModule {}




