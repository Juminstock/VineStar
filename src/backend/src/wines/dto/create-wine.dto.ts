import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWineDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  year: string;

  @IsNotEmpty()
  region: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  image: string;
}
