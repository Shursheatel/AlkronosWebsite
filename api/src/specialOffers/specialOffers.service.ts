import { Injectable } from '@nestjs/common';                                        
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class SpecialOffersService {
  constructor(private prisma: PrismaService) {}

  async getOffers() {
    return this.prisma.specialOffers.findMany({
      select: {
          title: true,
          type: true,
          body: true,
          imgURL: true,
      },
    });       
  }
}






