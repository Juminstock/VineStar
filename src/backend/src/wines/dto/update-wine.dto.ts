import { PartialType } from '@nestjs/mapped-types';
import { CreateWineDto } from './create-wine.dto';

export class UpdateWineDto extends PartialType(CreateWineDto) {}
