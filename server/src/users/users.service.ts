import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: Map<number, User> = new Map();
  private id = 0;

  async create(dto: CreateUserDto) {
    this.users.set(this.id, {
      id: ++this.id,
      ...dto,
      createdAt: new Date(),
    });
    return this.users.get(this.id);
  }

  findAll() {
    return Array.from(this.users, (user) => user[1]);
  }

  findOne(id: number) {
    return this.users.get(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users.set(this.id, {
      ...this.users.get(id),
      ...updateUserDto,
    });
    return this.users.get(this.id);
  }

  remove(id: number) {
    return this.users.delete(id);
  }
}
