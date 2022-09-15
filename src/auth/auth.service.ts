import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { UserLoginDto } from './dto/user-login.dto';
import { RegisterDto } from './dto/user-register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserI } from 'src/users/user.interface';

require('dotenv').config();
@Injectable()
export class AuthService {
  constructor(
    @InjectKnex() private readonly knex: Knex,
    private jwtService: JwtService,
  ) {}

  generateJwt(user: UserI) {
    return this.jwtService.signAsync({ user }, { secret: 'iU83hdy0' });
  }

  hashPassword(password: string) {
    return bcrypt.hash(password, 12);
  }

  comparePasswords(password: string, storedPasswordHash: string) {
    return bcrypt.compare(password, storedPasswordHash);
  }

  private emailExists(email: string) {
    email = email.toLowerCase();
    return this.knex('users')
      .where({ email })
      .first()
      .then((user) => {
        if (user) {
          return true;
        }
        return false;
      });
  }

  private usernameExists(username: string) {
    username = username.toLowerCase();
    return this.knex('users')
      .where({ username })
      .first()
      .then((user) => {
        if (user) {
          return true;
        }
        return false;
      });
  }

  async register(register: RegisterDto) {
    const { username, email, password, ...data } = register;

    if (await this.usernameExists(username)) {
      throw new ConflictException(
        `This ${register.username} username already exists!`,
      );
    }

    if (await this.emailExists(email)) {
      throw new ConflictException(
        `This ${register.email} email already exists`,
      );
    }
    return await this.knex('users')
      .insert({
        email: email.toLowerCase(),
        username: username.toLowerCase(),
        password: await this.hashPassword(password),
        ...data,
      })
      .returning('*');
  }

  async login(login: UserLoginDto) {
    const { username, password } = login;
    if (!(await this.usernameExists(username))) {
      throw new UnauthorizedException(`Invalid credentials`);
    }
    const hasUser = await this.knex('users')
      .where({ username: username.toLowerCase() })
      .first()
      .then((user) => {
        if (user) {
          return user;
        } else {
          throw new UnauthorizedException(`Invalid credentials`);
        }
      });
    const isMatch = await this.comparePasswords(
      login.password,
      hasUser.password,
    );
    if (isMatch) {
      return await this.generateJwt(hasUser);
    } else {
      throw new UnauthorizedException(`Invalid credentials`);
    }
  }
}
