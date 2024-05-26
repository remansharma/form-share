import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AdminsService } from '../admins/admins.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly adminService: AdminsService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.adminService.findOneByEmail(username);
    console.log('RESULT USER', user);
    if (!user) {
      return null;
    }

    // find if user password match
    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { password, ...result } = user['dataValues'];
    return user;
  }

  async login(user: any) {
    console.log('user', user);

    const token = await this.generateToken(user);
    return { user, token };
  }

  async create(user: any) {
    // hash the password
    const pass = await this.hashPassword(user.password);

    // create the user
    const newUser = await this.adminService.create({ ...user, password: pass });

    // tslint:disable-next-line: no-string-literal
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { password, ...result } = newUser;

    // generate token
    const token = await this.generateToken({
      name: newUser.name,
      id: newUser._id,
    });

    // return the user and the token
    return { user: newUser, token };
  }

  async generateToken(user) {
    console.log('user', user);

    const token = await this.jwtService.signAsync(user);
    console.log('token', token);

    return token;
  }

  async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}
