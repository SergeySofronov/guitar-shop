import { Module } from '@nestjs/common';
import { ConfigModule, } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from './prisma/prisma.module';
import { fileUploadOptions, jwtOptions } from '@guitar-shop/core';
import { ENV_FILE_PATH } from './app.constant';
import { envValidationSchema } from './env.validation.schema';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    PassportModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [jwtOptions, fileUploadOptions],
      validationSchema: envValidationSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
