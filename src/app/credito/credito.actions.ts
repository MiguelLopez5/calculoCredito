import { createAction, props } from '@ngrx/store'; 

export const calcularPlanPago = createAction('[Credito] Calcular plan de pago', props<{ valorCredito: number, numeroCuotas: number, tasaInteres: number }>());