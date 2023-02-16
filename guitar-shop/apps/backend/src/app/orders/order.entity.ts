import { Injectable } from '@nestjs/common'
import { Entity } from '@guitar-shop/core';
import { Order, OrderItem } from '@guitar-shop/shared-types';

@Injectable()
export class OrderEntity implements Entity<OrderEntity, Order>, Order {
  public id?: number;
  public orderList: OrderItem[];
  public quantity: number;
  public total: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(user: Order) {
    this.fillEntity(user);
  }

  public toObject() {
    return { ...this };
  }

  private getTotalQuantity() {
    let quantity = 0;
    for (const item of this.orderList) {
      quantity += item.quantity;
    }

    return quantity;
  }

  private getTotalPrice() {
    let total = 0;
    for (const item of this.orderList) {
      item.total = item.price * item.quantity;
      total += item.total;
    }

    return total;
  }

  public fillEntity(user: Order) {
    this.id = user.id;
    this.orderList = user.orderList;
    this.quantity = this.getTotalQuantity();
    this.total = this.getTotalPrice();
    this.createdAt = user.createdAt || new Date();
    this.updatedAt = user.updatedAt || new Date();
  }
}
