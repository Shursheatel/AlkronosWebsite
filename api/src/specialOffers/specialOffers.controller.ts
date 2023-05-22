import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';                        
import { SpecialOffersService } from './specialOffers.service';

@Controller('special-offers')
export class SpecialOffersController {
  constructor(private readonly specialOffersService: SpecialOffersService) {}

  @HttpCode(HttpStatus.OK)
  @Get('offers')
  getOffers() {
    return this.specialOffersService.getOffers();
  }
}



