export class CuotaMensual {
  mes: number;
  saldoInicial: number;
  abonoCapital: number;
  valorInteres: number;
  valorCuota: number;
  saldoFinal: number;

  constructor(mes: number, saldoInicial: number, abonoCapital: number, valorInteres: number, valorCuota: number, saldoFinal: number){
    this.mes = mes;
    this.saldoInicial = saldoInicial;
    this.abonoCapital = abonoCapital;
    this.valorInteres = valorInteres;
    this.valorCuota = valorCuota;
    this.saldoFinal = saldoFinal;
  }
}