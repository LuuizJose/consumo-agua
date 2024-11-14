import { ConsumoAguaService } from './consumo_agua.service';
export declare class ConsumoAguaController {
    private readonly consumoAguaService;
    constructor(consumoAguaService: ConsumoAguaService);
    registerConsumption(body: {
        userId: number;
        quantity: number;
        readingDate: Date;
    }): Promise<import("./consumo_agua.model").ConsumoAgua>;
    getConsumptionHistory(userId: number, startDate: string, endDate: string): Promise<import("./consumo_agua.model").ConsumoAgua[]>;
    checkHighConsumption(userId: number): Promise<string>;
}
