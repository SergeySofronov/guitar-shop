import { Injectable } from '@nestjs/common'
import { Entity } from '@guitar-shop/core';
import { Comment } from '@guitar-shop/shared-types';
import { CommentDefaults } from './comment.constant';

@Injectable()
export class CommentEntity implements Entity<CommentEntity, Comment>, Comment {
  public id?: number;
  public userId: number;
  public productId: number;
  public score: number;
  public content: string;
  public advantages: string;
  public disadvantages: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(user: Comment) {
    this.fillEntity(user);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(user: Comment) {
    this.id = user.id;
    this.userId = user.userId;
    this.productId = user.productId;
    this.score = user.score || CommentDefaults.Score;
    this.content = user.content;
    this.advantages = user.advantages;
    this.disadvantages = user.disadvantages;
    this.createdAt = user.createdAt || new Date();
    this.updatedAt = user.updatedAt || new Date();
  }
}
