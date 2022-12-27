import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get(process.env.POSTGRES_HOST),
        port: configService.get<number>(process.env.POSTGRES_PORT),
        username:configService.get(process.env.POSTGRES_USER),
        password: configService.get(process.env.POSTGRES_PASSWORD),
        database: configService.get(process.env.POSTGRES_DATABASE),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
