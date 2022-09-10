import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KnexModuleOptions, KnexModuleOptionsFactory } from 'nestjs-knex';

@Injectable()
export class DatabaseConfig implements KnexModuleOptionsFactory {
  constructor(private configService: ConfigService) {}

  createKnexModuleOptions(): Promise<KnexModuleOptions> | KnexModuleOptions {
    return {
      config: {
        client: this.configService.get('DB_CLIENT'),
        connection: {
          host: this.configService.get('POSTGRES_HOST'),
          port: +this.configService.get('POSTGRES_PORT'),
          user: this.configService.get('POSTGRES_USER'),
          password: this.configService.get('POSTGRES_PASSWORD'),
          database: this.configService.get('POSTGRES_DB'),
        },
      },
    } as KnexModuleOptions;
  }
}