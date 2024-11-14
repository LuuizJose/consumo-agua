"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumoAguaService = void 0;
const common_1 = require("@nestjs/common");
const consumo_agua_model_1 = require("./consumo_agua.model");
let ConsumoAguaService = class ConsumoAguaService {
    constructor() {
        this.consumos = [];
    }
    registerConsumption(userId, quantity, readingDate) {
        const consumo = new consumo_agua_model_1.ConsumoAgua();
        consumo.userId = userId;
        consumo.quantity = quantity;
        consumo.readingDate = readingDate;
        this.consumos.push(consumo);
        return consumo;
    }
    getConsumptionHistory(userId, startDate, endDate) {
        return this.consumos.filter((consumo) => consumo.userId === userId &&
            consumo.readingDate >= startDate &&
            consumo.readingDate <= endDate);
    }
    checkHighConsumption(userId) {
        const userConsumptions = this.consumos.filter((consumo) => consumo.userId === userId);
        if (userConsumptions.length < 2) {
            return 'Não é possível gerar alerta, é necessário ter pelo menos 2 meses de consumo.';
        }
        const lastMonthConsumption = userConsumptions[userConsumptions.length - 1];
        const previousMonthConsumption = userConsumptions[userConsumptions.length - 2];
        if (lastMonthConsumption.quantity > previousMonthConsumption.quantity) {
            return `Alerta: Consumo elevado em comparação ao mês anterior. Mês atual: ${lastMonthConsumption.quantity}m³, Mês anterior: ${previousMonthConsumption.quantity}m³`;
        }
        return 'Consumo dentro dos limites.';
    }
};
exports.ConsumoAguaService = ConsumoAguaService;
exports.ConsumoAguaService = ConsumoAguaService = __decorate([
    (0, common_1.Injectable)()
], ConsumoAguaService);
//# sourceMappingURL=consumo_agua.service.js.map