"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWineDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_wine_dto_1 = require("./create-wine.dto");
class UpdateWineDto extends (0, mapped_types_1.PartialType)(create_wine_dto_1.CreateWineDto) {
}
exports.UpdateWineDto = UpdateWineDto;
//# sourceMappingURL=update-wine.dto.js.map