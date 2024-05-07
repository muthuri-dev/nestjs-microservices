import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { Response } from 'express';

//business logic here
@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  //register user service
  async register(registerDto: RegisterDto, response: Response) {
    const { name, email, password } = registerDto;

    //checking if email aready exists in the database
    const isEmailExists = await this.prisma.user.findUnique({
      where: { email },
    });
    if (isEmailExists)
      throw new BadRequestException('User already exists with this email');

    const user = await this.prisma.user.create({
      data: { name, email, password },
    });
    return { user, response };
  }

  //login user service
  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = { email, password };
    return user;
  }

  //get all users service
  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
