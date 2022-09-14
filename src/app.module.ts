import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { DatabaseConfig } from './shared/database';
import { ConfigModule } from '@nestjs/config';
import { CartsModule } from './carts/carts.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ShippingAddressesModule } from './shipping-addresses/shipping-addresses.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule.forRootAsync({
      useClass: DatabaseConfig,
    }),q
    ProductModule,
    OrderModule,
    CartsModule,
    UsersModule,
    CategoriesModule,
    ShippingAddressesModule,
    AuthModule,
    RolesModule,
  ],
})
export class AppModule {}
