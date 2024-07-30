import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIngredientDto {
 
  @IsString()
  name: string;

 
  @IsString()
  aisle: string;
}
