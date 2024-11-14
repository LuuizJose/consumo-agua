import { ConsumoAgua } from './consumo_agua.model';
export declare class ConsumoAguaService {
    private consumos;
    registerConsumption(userId: number, quantity: number, readingDate: Date): ConsumoAgua;
    getConsumptionHistory(userId: number, startDate: Date, endDate: Date): ConsumoAgua[];
    checkHighConsumption(userId: number): string;
}
