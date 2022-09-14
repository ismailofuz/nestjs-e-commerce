import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { UserLoginDto } from './dto/user-login.dto';
import { RegisterDto } from './dto/user-register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectKnex() private readonly knex: Knex,
    private jwtService: JwtService,
  ) {}

  async register(register: RegisterDto) {
    const { username } = register;
    const existsUser = await this.knex('users')
      .where({
        username,
      })
      .first();
    if (existsUser) {
      throw new ConflictException(`This ${register.username} already exists!`);
    }
    const registerUser = await this.knex('users')
      .insert(register)
      .returning('*');
    return registerUser;
  }

  async login(login: UserLoginDto) {
    const { username, password } = login;
    const hasUser = await this.knex('users')
      .where({
        username,
      })
      .first();

    if (!hasUser) {
      throw new HttpException(`Invalid credentials`, HttpStatus.UNAUTHORIZED);
    }

    // if (bcrypt.compare(password, hasUser.password)) {
    //   // login bo'ladi
    // } else {
    //   return new HttpException(`Invalid credentials`, HttpStatus.UNAUTHORIZED);
    // }

    return this.passwordCompare(password, hasUser[0]);
  }

  generateToken(user: any) {
    const payload = {
      id: user.id,
      role_id: user.role_id,
      username: user.username,
    };
    const token = this.jwtService.sign({ user: payload });

    return {
      user: {
        id: user.id,
        role_id: user.role_id,
        username: user.username,
      },
      access_token: token,
    };
  }

  private async passwordCompare(password: string, user: any) {
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new UnauthorizedException('Invalid credentials!');
    return this.generateToken(user);
  }
}
