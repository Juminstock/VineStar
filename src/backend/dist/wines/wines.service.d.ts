import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
import { WineRepository } from './wines.repository';
export declare class WinesService {
    private readonly wineRepository;
    constructor(wineRepository: WineRepository);
    create(createWineDto: CreateWineDto): Promise<import("./schema/wine.schema").Wine>;
    findAll(): Promise<import("./schema/wine.schema").Wine[]>;
    findOne(id: string): Promise<import("./schema/wine.schema").Wine>;
    update(id: string, updateWineDto: UpdateWineDto): Promise<import("./schema/wine.schema").Wine>;
    remove(id: string): Promise<import("./schema/wine.schema").Wine>;
}
