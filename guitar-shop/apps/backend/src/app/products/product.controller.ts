import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject, JwtAuthGuard, Roles, RolesGuard } from '@guitar-shop/core';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { ProductRdo } from './rto/product.rdo';
import { UserRole } from '@guitar-shop/shared-types';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) { }

  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post('/')
  @Roles(`${UserRole.Admin}`)
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    type: ProductRdo,
    status: HttpStatus.CREATED,
    description: 'Resource for creating a product',
  })
  @ApiResponse({
    type: ProductRdo,
    status: HttpStatus.FORBIDDEN,
    description: 'Resource for admins only',
  })
  public async create(@Body() dto: CreateProductDto) {
    // const newUser = await this.productService.createProduct(dto);
    // return fillObject(ProductRdo, newUser);
    return dto;
  }
}
