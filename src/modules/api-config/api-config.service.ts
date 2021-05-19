import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ApiConfig } from './api-config.types';

@Injectable()
export class ApiConfigService {
  constructor(private readonly configService: ConfigService) {}

  get databaseConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      synchronize: false,
      autoLoadEntities: true,
      host: this.configService.get('TYPEORM_HOST'),
      database: this.configService.get('TYPEORM_DATABASE'),
      port: this.configService.get<number>('TYPEORM_PORT'),
      username: this.configService.get('TYPEORM_USERNAME'),
      password: this.configService.get('TYPEORM_PASSWORD'),
      migrations: [this.configService.get('TYPEORM_MIGRATIONS')],
      logging: this.configService.get<boolean>('TYPEORM_LOGGING'),
      migrationsRun: this.configService.get<boolean>('TYPEORM_MIGRATIONS_RUN'),
    };
  }

  get apiConfig(): ApiConfig {
    return { port: this.configService.get<number>('API_PORT') };
  }
}
