import { Injectable } from '@nestjs/common'
import { Entity } from '@guitar-shop/core';
import { Guitar, GuitarType, Product, StringsCount } from '@guitar-shop/shared-types';
import { ProductDefaults } from './product.constant';

@Injectable()
export class ProductEntity implements Entity<ProductEntity, Product>, Product {
  public id?: number;
  public title: string;
  public description: string;
  public photo: string;
  public guitarType: GuitarType;
  public article: string;
  public stringsCount: StringsCount;
  public rating: number;
  public price: number;
  public commentsCount: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(user: Product) {
    this.fillEntity(user);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(user: Product) {
    this.id = user.id;
    this.title = user.title;
    this.description = user.description;
    this.photo = ProductDefaults.Photo;
    this.article = user.article;
    this.guitarType = user.guitarType || Guitar.Electric;
    this.stringsCount = user.stringsCount || StringsCount.Six;
    this.rating = user.rating || ProductDefaults.Rating;
    this.price = user.price || ProductDefaults.Price;
    this.commentsCount = ProductDefaults.CommentsCount;
    this.createdAt = user.createdAt || new Date();
    this.updatedAt = user.updatedAt || new Date();
  }
}
