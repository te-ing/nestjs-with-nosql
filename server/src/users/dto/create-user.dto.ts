import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  name: string;
  @IsString()
  @IsNotEmpty()
  team: string;
}
