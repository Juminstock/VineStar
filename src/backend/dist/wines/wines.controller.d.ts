import { WinesService } from './wines.service';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
export declare class WinesController {
    private readonly winesService;
    constructor(winesService: WinesService);
    create(createWineDto: CreateWineDto): Promise<import("./schema/wine.schema").Wine>;
    findAll(): Promise<import("./schema/wine.schema").Wine[]>;
    findOne(id: string): Promise<import("./schema/wine.schema").Wine>;
    update(id: string, updateWineDto: UpdateWineDto): Promise<import("./schema/wine.schema").Wine>;
    remove(id: string): Promise<import("./schema/wine.schema").Wine>;
}
