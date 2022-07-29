export function calcularValorCuota(valorCredito: number, numeroCuotas: number, tasaInteres: number): number {
  let resultadoNumerador: number = (Math.pow((1+tasaInteres), numeroCuotas)) * tasaInteres;
  let resultadoDenominador: number = (Math.pow((1+tasaInteres), numeroCuotas) - 1);

  return valorCredito * (resultadoNumerador / resultadoDenominador);
}