import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CRUDRepositoryInterface } from '@guitar-shop/core';
import { User } from '@guitar-shop/shared-types';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository implements CRUDRepositoryInterface<UserEntity, number, User> {
  constructor(private readonly prisma: PrismaService) { }

  public async create(item: UserEntity): Promise<User> {
    const entityData = item.toObject();
    return this.prisma.user.create({
      data: {
        ...entityData,
      }
    });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findById(_id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(_id: number, _item: Partial<UserEntity>): Promise<User> {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  destroy(_id: number, _ids: number[]): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
