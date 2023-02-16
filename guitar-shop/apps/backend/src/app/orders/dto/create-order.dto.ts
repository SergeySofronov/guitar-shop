import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { ValidityMessage as VM } from '@guitar-shop/core';
import { OrderItemDto } from './create-order-item.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru',
    required: true,
  })
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  @ArrayNotEmpty({ message: VM.IsNotEmptyMessage })
  @IsArray({ message: VM.IsArrayMessage })
  public orderList: OrderItemDto[];
}
