import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    MongooseModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      uri: config.get('CONNECTION_STRING')
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
