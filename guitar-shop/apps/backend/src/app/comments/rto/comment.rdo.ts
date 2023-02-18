import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { CommentValidity as CV } from '../comment.constant';

export class CommentRdo {
  @ApiProperty({
    description: 'User unique identifier',
    example: 1,
    minimum: CV.IdMinValue,
  })
  @Expose()
  public userId: number;

  @ApiProperty({
    description: 'Product unique identifier',
    example: 1,
    minimum: CV.IdMinValue,
  })
  @Expose()
  public productId: number;

  @ApiProperty({
    description: 'Product unique identifier',
    example: 1,
    minimum: CV.ScoreMinValue,
    maximum: CV.ScoreMaxValue,
  })
  @Expose()
  public score: number;


  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
    minimum: CV.ContentMinLength,
    maximum: CV.ContentMaxLength,
  })
  @Expose()
  public content: string;

  @ApiProperty({
    description: 'Description of the advantages of the product',
    example: 'Good body, clear sound, good quality strings...',
    minimum: CV.AdvantagesMinLength,
    maximum: CV.AdvantagesMinLength,
  })
  @Expose()
  public advantages: string;

  @ApiProperty({
    description: 'Description of the disadvantages of the product',
    example: 'Tight spikes...',
    minimum: CV.DisadvantagesMinLength,
    maximum: CV.DisadvantagesMaxLength,
  })
  @Expose()
  public disadvantages: string;
}
