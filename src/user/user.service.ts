import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(email: string, password: string, name: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async updateUser(id: number, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }
}
