import { UserGender } from '../user.constants';

export class CreateUserDto {
  readonly name: string;
  readonly gender: UserGender;
  readonly age: number;
}
