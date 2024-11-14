

import { Injectable } from '@nestjs/common';
import { ConsumoAgua } from './consumo_agua.model';

@Injectable()
export class ConsumoAguaService {
  private consumos: ConsumoAgua[] = []; 

  registerConsumption(userId: number, quantity: number, readingDate: Date) {
    const consumo = new ConsumoAgua();
    consumo.userId = userId;
    consumo.quantity = quantity;
    consumo.readingDate = readingDate;
    this.consumos.push(consumo); 
    return consumo;
  }


  getConsumptionHistory(userId: number, startDate: Date, endDate: Date) {
    return this.consumos.filter(
      (consumo) =>
        consumo.userId === userId &&
        consumo.readingDate >= startDate &&
        consumo.readingDate <= endDate,
    );
  }


  checkHighConsumption(userId: number) {
    const userConsumptions = this.consumos.filter(
      (consumo) => consumo.userId === userId,
    );
    if (userConsumptions.length < 2) {
      return 'Não é possível gerar alerta, é necessário ter pelo menos 2 meses de consumo.';
    }

    const lastMonthConsumption = userConsumptions[userConsumptions.length - 1];
    const previousMonthConsumption =
      userConsumptions[userConsumptions.length - 2];

    if (lastMonthConsumption.quantity > previousMonthConsumption.quantity) {
      return `Alerta: Consumo elevado em comparação ao mês anterior. Mês atual: ${lastMonthConsumption.quantity}m³, Mês anterior: ${previousMonthConsumption.quantity}m³`;
    }
    return 'Consumo dentro dos limites.';
  }
}
