export enum Guitar {
  Electric = 'Electric',
  Acoustics = 'Acoustics',
  Ukulele = 'Ukulele',
}

export type GuitarType = keyof typeof Guitar;
