import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShippingAddressesService } from './shipping-addresses.service';
import { CreateShippingAddressDto } from './dto/create-shipping-address.dto';
import { UpdateShippingAddressDto } from './dto/update-shipping-address.dto';

@Controller('shipping-addresses')
export class ShippingAddressesController {
  constructor(private readonly shippingAddressesService: ShippingAddressesService) {}

  @Post()
  create(@Body() createShippingAddressDto: CreateShippingAddressDto) {
    return this.shippingAddressesService.create(createShippingAddressDto);
  }

  @Get()
  findAll() {
    return this.shippingAddressesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingAddressesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShippingAddressDto: UpdateShippingAddressDto) {
    return this.shippingAddressesService.update(+id, updateShippingAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingAddressesService.remove(+id);
  }
}
