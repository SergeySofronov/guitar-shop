export const ProductDefaults = {
  Rating: 0,
  Price: 0,
  CommentsCount: 0,
  Photo: 'default.jpg',
} as const;

export enum ProductValidity {
  TitleMinLength = 10,
  TitleMaxLength = 100,
  DescriptionMinLength = 20,
  DescriptionMaxLength = 1024,
  ArticleMinLength = 5,
  ArticleMaxLength = 40,
  RatingMinValue = 0,
  RatingMaxValue = 5,
  PriceMinValue = 100,
  PriceMaxValue = 1000000,
}
