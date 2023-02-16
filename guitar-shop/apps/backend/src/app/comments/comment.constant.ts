export const CommentDefaults = {
  Score: 0,
} as const;

export enum CommentValidity {
  IdMinValue = 0,
  AdvantagesMaxLength = 50,
  AdvantagesMinLength = 100,
  DisadvantagesMaxLength = 50,
  DisadvantagesMinLength = 100,
  ContentMaxLength = 5,
  ContentMinLength = 1024,
  ScoreMinValue = 1,
  ScoreMaxValue = 5,
}
