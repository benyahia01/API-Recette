import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { CreateIngredientDto } from '../dto/create-ingredient.dto';
import { UpdateIngredientDto } from '../dto/update-ingredient.dto';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientsRepository: Repository<Ingredient>,
  ) {}
  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    console.log('Creating ingredient with DTO:', createIngredientDto); 
    try {
      const ingredient = this.ingredientsRepository.create(createIngredientDto);
      const savedIngredient = await this.ingredientsRepository.save(ingredient);
      console.log('Created ingredient:', savedIngredient); 
      return savedIngredient;
    } catch (error) {
      console.error('Error in create method:', error);
      throw error;
    }
  }

  findAll(): Promise<Ingredient[]> {
    return this.ingredientsRepository.find();
  }


  async findOne(id: number): Promise<Ingredient> {
    const ingredient = await this.ingredientsRepository.findOne({
      where: { id },
    });
    if (!ingredient) {
      throw new NotFoundException(`Ingredient with id ${id} not found`);
    }
    return ingredient;
  }

  
  async update(id: number, updateIngredientDto: UpdateIngredientDto): Promise<Ingredient> {
    const existingIngredient = await this.findOne(id);
    if (!existingIngredient) {
      throw new NotFoundException(`Ingredient with id ${id} not found`);
    }
    await this.ingredientsRepository.update(id, updateIngredientDto);
    const updatedIngredient = await this.ingredientsRepository.findOne({
      where: { id },
    });
    if (!updatedIngredient) {
      throw new NotFoundException(`Ingredient with id ${id} not found`);
    }
    return updatedIngredient;
  }
  async remove(id: number): Promise<void> {
    const result = await this.ingredientsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Ingredient with id ${id} not found`);
    }
  }
}
