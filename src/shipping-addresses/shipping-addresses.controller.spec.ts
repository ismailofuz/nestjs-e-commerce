import { Test, TestingModule } from '@nestjs/testing';
import { ShippingAddressesController } from './shipping-addresses.controller';
import { ShippingAddressesService } from './shipping-addresses.service';

describe('ShippingAddressesController', () => {
  let controller: ShippingAddressesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingAddressesController],
      providers: [ShippingAddressesService],
    }).compile();

    controller = module.get<ShippingAddressesController>(ShippingAddressesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
