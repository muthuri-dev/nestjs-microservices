import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { PrismaService } from 'prisma/Prisma.service';

//business logic here
@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  //register user service
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const user = { name, email, password };
    return user;
  }

  //login user service
  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = { email, password };
    return user;
  }

  //get all users service
  async getAllUsers() {
    return this.prisma;
  }
}
