import { createReducer, on } from '@ngrx/store';
import { calcularPlanPago } from './credito.actions';
import { CuotaMensual } from './models/credito.model';
import { calcularValorCuota } from './credito.helpers';

export const initialState: CuotaMensual[] = [];

export const creditoReducer = createReducer(
  initialState,
  on(calcularPlanPago, (state, { valorCredito, numeroCuotas, tasaInteres }) => {
    let listaCuotas: CuotaMensual[] = [];
    let saldoInicial: number = valorCredito;
    let valorCuota: number = calcularValorCuota(valorCredito, numeroCuotas, tasaInteres);

    for(let i = 0; i < numeroCuotas; i++){
      let mes = i + 1;
      let valorInteres = saldoInicial * tasaInteres;
      let abonoCapital = valorCuota - valorInteres;
      let saldoFinal = saldoInicial - abonoCapital;
      listaCuotas.push(new CuotaMensual(mes, saldoInicial, abonoCapital, valorInteres, valorCuota, saldoFinal));
      
      saldoInicial = saldoFinal;
    }
    return listaCuotas;
  }),
);