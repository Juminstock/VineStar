/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from 'mongoose';
export type WineDocument = HydratedDocument<Wine>;
export declare class Wine {
    name: string;
    address: string;
    type: string;
    year: string;
    region: string;
    price: number;
    description: string;
    stock: number;
    image: string;
}
export declare const WineSchema: import("mongoose").Schema<Wine, import("mongoose").Model<Wine, any, any, any, import("mongoose").Document<unknown, any, Wine> & Wine & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Wine, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Wine>> & import("mongoose").FlatRecord<Wine> & {
    _id: import("mongoose").Types.ObjectId;
}>;
