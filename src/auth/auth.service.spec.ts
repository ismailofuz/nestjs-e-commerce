import { Test, TestingModule } from '@nestjs/testing';
import { KnexModule } from 'nestjs-knex';
import { DatabaseConfig } from 'src/shared/database';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ KnexModule.forRootAsync({
        useClass: DatabaseConfig,
      }),],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
