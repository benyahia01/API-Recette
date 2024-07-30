import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';
import { CreateRecipeDto } from '../dto/create-recipe.dto';
import { UpdateRecipeDto } from '../dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    if (!createRecipeDto.name || createRecipeDto.name.trim() === '') {
      throw new BadRequestException('Recipe name cannot be null or empty');
    }
    const newRecipe = this.recipeRepository.create(createRecipeDto);
    return this.recipeRepository.save(newRecipe);
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  async findOne(id: number): Promise<Recipe | null> {
    return this.recipeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe | null> {
    const existingRecipe = await this.recipeRepository.findOne({ where: { id } });
    if (!existingRecipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    if (updateRecipeDto.name && existingRecipe.name !== updateRecipeDto.name) {
      console.log('BAZINGA');
    }

    if (updateRecipeDto.name === '' || !updateRecipeDto.name) {
      throw new BadRequestException('Recipe name cannot be null or empty');
    }

    const updatedRecipe = { ...existingRecipe, ...updateRecipeDto };
    return this.recipeRepository.save(updatedRecipe);
  }

  async remove(id: number): Promise<void> {
    const result = await this.recipeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
  }
}
