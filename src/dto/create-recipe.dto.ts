import { Ingredient } from '../ingredients/ingredient.entity';

export class CreateRecipeDto {
  name: string;
  description?: string;
  instructions?: string;
  ingredients: Ingredient[];
}
