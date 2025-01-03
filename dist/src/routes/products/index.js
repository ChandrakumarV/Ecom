"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const validationMiddleware_1 = require("../../middleware/validationMiddleware");
const productSchema_1 = require("../../schemas/productSchema");
const productRouter = (0, express_1.Router)();
productRouter.get('/', controller_1.getProducts);
productRouter.get('/:id', controller_1.getProduct);
productRouter.post('/', (0, validationMiddleware_1.validateData)(productSchema_1.addProductSchema), controller_1.addProduct);
productRouter.put('/:id', (0, validationMiddleware_1.validateData)(productSchema_1.updateProductSchema), controller_1.udpateProduct);
productRouter.delete('/:id', controller_1.deleteProduct);
exports.default = productRouter;
