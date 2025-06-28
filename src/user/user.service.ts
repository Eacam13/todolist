import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }
    async create(data: UserDto) {
        const user = await this.prisma.user.create({
            data
        });

        return user;
    }

    async findAll() {
        return await this.prisma.user.findMany();
    }

    async getById(id: number) {
        const userExists = await this.prisma.user.findUnique({
            where: { id }
        });

        if(!userExists) {
            throw new NotFoundException('Usuário não encontrado!');
        }

        return userExists
       
    }

    async update(id: number, data: UserDto) {
        const userExists = await this.prisma.user.findUnique({
            where: {
                id,
            }
        })

        if (!userExists) {
            throw new NotFoundException('Usuário não encontrado!');
        }

        const updateUser = await this.prisma.user.update({
            data,
            where: {
                id
            }
        })

        return updateUser;

    }

    async delete(id: number) {
        const userExists = await this.prisma.user.findUnique({
            where: { id }
        });

        if(!userExists) {
            throw new NotFoundException('Usuário não encontrado!');
        }

        const updateUser = await this.prisma.user.delete({
            where: { id }
        })
       
    }


}
