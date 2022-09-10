import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { DatabaseConfig } from './shared/database';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule.forRootAsync({
      useClass: DatabaseConfig,
    }),
    ProductModule,
    OrderModule,
  ],
})
export class AppModule {}
