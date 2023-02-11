import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express/multer';
import { PrismaModule } from './prisma/prisma.module';
import { fileUploadOptions, getFileUploadConfig, jwtOptions, JwtStrategy } from '@guitar-shop/core';
import { ENV_FILE_PATH } from './app.constant';
import { envValidationSchema } from './env.validation.schema';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [jwtOptions, fileUploadOptions],
      validationSchema: envValidationSchema,
    }),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getFileUploadConfig,
    }),
  ],
  controllers: [],
  providers: [JwtStrategy, Logger],
})
export class AppModule { }
