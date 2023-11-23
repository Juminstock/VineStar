"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WineRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const wine_schema_1 = require("./schema/wine.schema");
let WineRepository = class WineRepository {
    constructor(wineModel) {
        this.wineModel = wineModel;
    }
    async findAll() {
        return this.wineModel.find().exec();
    }
    async findOne(id) {
        return this.wineModel.findById(id).exec();
    }
    async save(wineData) {
        const newWine = new this.wineModel(wineData);
        return newWine.save();
    }
    async update(id, wineData) {
        return this.wineModel.findByIdAndUpdate(id, wineData, { new: true });
    }
    async remove(id) {
        return this.wineModel.findByIdAndRemove(id);
    }
};
exports.WineRepository = WineRepository;
exports.WineRepository = WineRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(wine_schema_1.Wine.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WineRepository);
//# sourceMappingURL=wines.repository.js.map