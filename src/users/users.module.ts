import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserMiddleware } from './middleware/user.middleware';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserInterceptor } from './interceptor/user.interceptor';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [UsersController],
  providers: [UsersService,
    {
      provide: APP_INTERCEPTOR,
      useClass: UserInterceptor
    },]
})
// export class UsersModule { }
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.ALL });
  }
}
