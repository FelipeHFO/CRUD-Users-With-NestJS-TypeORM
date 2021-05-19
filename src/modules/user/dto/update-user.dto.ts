import { UserGender } from '../user.constants';

export class UpdateUserDto {
  readonly name?: string;
  readonly gender?: UserGender;
  readonly age?: number;
}
