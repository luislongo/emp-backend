import { Controller, Get, Param } from '@nestjs/common';
import { OrcamentoService } from './orcamento.service';

@Controller('orcamento')
export class OrcamentoController {
  constructor(private readonly orcamentoService: OrcamentoService) {}

  @Get(':idbuilding')
  findByBuildingId(@Param() param) {
    return this.orcamentoService.findByBuildingId(param.idbuilding);
  }
}
