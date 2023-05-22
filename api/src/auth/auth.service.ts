import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { signUpDto } from './signUp.dto';
import { signInDto } from './signIn.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, 
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signUpDto: signUpDto): Promise<object> {
    const collisionCheck = await this.usersService.getUserByEmail(signUpDto.email);
    if(collisionCheck) {
      throw new HttpException('A user with the same email already exists', HttpStatus.BAD_REQUEST)
    }
    const hashedPassword = await bcrypt.hash(signUpDto.password, 5);
    const user = await this.usersService.createUser({
      email: signUpDto.password,
      password: hashedPassword,
    });
    const payload = { email: user.email, sub: user.id };
    const tokens = await this.generateTokens(payload);
    return tokens;
  }

  async signIn(signInDto: signInDto): Promise<object> {
    const user = await this.usersService.getUserByEmail(signInDto.email);
    if (!user) {
      throw new HttpException('A user with this email doesn\'t exists', HttpStatus.UNAUTHORIZED)
    }
    const passwordsMatch = await bcrypt.compare(signInDto.password, user.password)
    if (!passwordsMatch) {
      throw new HttpException('Wrong password', HttpStatus.UNAUTHORIZED)
    }
    const payload = { email: user.email, sub: user.id };
    const tokens = await this.generateTokens(payload);
    return tokens;
  }

  async generateTokens(payload: object): Promise<object> {
    return {
      access_token: await this.jwtService.signAsync(payload, { expiresIn: '30m', }),
      refresh_token: await this.jwtService.signAsync(payload, { expiresIn: '30d', }),
    };
  }
}












