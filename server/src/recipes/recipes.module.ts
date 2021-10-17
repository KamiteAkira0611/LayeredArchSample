import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';

@Module({
  providers: [RecipesResolver, RecipesService, DateScalar, PrismaService],
})
export class RecipesModule {}
