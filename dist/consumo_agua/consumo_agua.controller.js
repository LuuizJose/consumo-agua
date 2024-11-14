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
exports.ConsumoAguaController = void 0;
const common_1 = require("@nestjs/common");
const consumo_agua_service_1 = require("./consumo_agua.service");
let ConsumoAguaController = class ConsumoAguaController {
    constructor(consumoAguaService) {
        this.consumoAguaService = consumoAguaService;
    }
    async registerConsumption(body) {
        return this.consumoAguaService.registerConsumption(body.userId, body.quantity, body.readingDate);
    }
    async getConsumptionHistory(userId, startDate, endDate) {
        return this.consumoAguaService.getConsumptionHistory(userId, new Date(startDate), new Date(endDate));
    }
    async checkHighConsumption(userId) {
        return this.consumoAguaService.checkHighConsumption(userId);
    }
};
exports.ConsumoAguaController = ConsumoAguaController;
__decorate([
    (0, common_1.Post)('registrar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsumoAguaController.prototype, "registerConsumption", null);
__decorate([
    (0, common_1.Get)('historico'),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], ConsumoAguaController.prototype, "getConsumptionHistory", null);
__decorate([
    (0, common_1.Get)('alerta-consumo'),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsumoAguaController.prototype, "checkHighConsumption", null);
exports.ConsumoAguaController = ConsumoAguaController = __decorate([
    (0, common_1.Controller)('consumo-agua'),
    __metadata("design:paramtypes", [consumo_agua_service_1.ConsumoAguaService])
], ConsumoAguaController);
//# sourceMappingURL=consumo_agua.controller.js.map