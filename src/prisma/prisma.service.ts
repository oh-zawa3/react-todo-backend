import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  get user() {
    return this.prisma.user;
  }

  async onModuleShutdown() {
    await this.prisma.$disconnect();
  }
}
