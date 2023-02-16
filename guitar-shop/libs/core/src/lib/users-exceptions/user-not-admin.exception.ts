import { ForbiddenException } from '@nestjs/common';

export class UserNotAdminException extends ForbiddenException {
  constructor(userId: string) {
    super(`User with the id — ${userId} is not admin`);
  }
}
