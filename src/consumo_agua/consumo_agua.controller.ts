// src/consumo_agua/consumo_agua.controller.ts

import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ConsumoAguaService } from './consumo_agua.service';

@Controller('consumo-agua')
export class ConsumoAguaController {
  constructor(private readonly consumoAguaService: ConsumoAguaService) {}

  @Post('registrar')
  async registerConsumption(
    @Body() body: { userId: number; quantity: number; readingDate: Date },
  ) {
    return this.consumoAguaService.registerConsumption(
      body.userId,
      body.quantity,
      body.readingDate,
    );
  }

  @Get('historico')
  async getConsumptionHistory(
    @Query('userId') userId: number,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.consumoAguaService.getConsumptionHistory(
      userId,
      new Date(startDate),
      new Date(endDate),
    );
  }

 
  @Get('alerta-consumo')
  async checkHighConsumption(@Query('userId') userId: number) {
    return this.consumoAguaService.checkHighConsumption(userId);
  }
}
