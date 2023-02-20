import { Expose } from 'class-transformer';
import { OmitType } from '@nestjs/swagger';
import { UserRdo } from './user.rdo';

export class LoggedUserRdo extends OmitType(UserRdo, ['name']) {
  public token!: string;
}
