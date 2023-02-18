import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CRUDRepositoryInterface } from '@guitar-shop/core';
import { Order } from '@guitar-shop/shared-types';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderRepository implements CRUDRepositoryInterface<OrderEntity, number, Order> {
  constructor(private readonly prisma: PrismaService) { }
  findById(id: number): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  create(item: OrderEntity, id?: number): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  update(id: number, item: Partial<OrderEntity>): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  destroy(id: number, ids: number[]): Promise<void> {
    throw new Error('Method not implemented.');
  }

  // public async create(item: OrderEntity): Promise<Order> {
  //   const entityData = item.toObject();

  //   return this.prisma.order.create({
  //     data: {
  //       ...entityData,
  //     }
  //   });
  // }

  // public async findById(id: number): Promise<Order> {
  //   return this.prisma.order.findFirst({
  //     where: { id },
  //   });
  // }

  // public async update(id: number, item: Partial<OrderEntity>): Promise<Order> {
  //   return this.prisma.order.update({
  //     where: { id },
  //     data: {
  //       ...item,
  //     }
  //   })
  // }

  // public async destroy(id: number): Promise<void> {
  //   await this.prisma.order.delete({
  //     where: { id },
  //   })
  // }
}
