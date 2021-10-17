import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    const recipe = await this.prisma.recipe.create({
      data: {
        title: data.title,
        description: data.description || "",
        creationDate: new Date()
      },
    })
    return recipe as Recipe;
  }

  async findOneById(id: number): Promise<Recipe> {
    const recipe = await this.prisma.recipe.findUnique({
      where: {
        id: id,
      },
    })
    return recipe as Recipe;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    const recipes = await this.prisma.recipe.findMany({
      skip: recipesArgs.skip,
      take: recipesArgs.take,
    })
    return recipes as Recipe[];
  }

  async remove(id: number): Promise<boolean> {
    try {
      const recipe = await this.prisma.recipe.delete({
        where: {
          id: id
        },
      })
      return true;
    } catch (error) {
      return false;
    }
  }
}
