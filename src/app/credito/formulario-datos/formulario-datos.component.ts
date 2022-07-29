import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { calcularPlanPago } from '../credito.actions';

@Component({
  selector: 'app-formulario-datos',
  templateUrl: './formulario-datos.component.html',
  styles: [
  ]
})
export class FormularioDatosComponent implements OnInit {
  datoValorCredito: FormControl;
  datoNumeroCuotas: FormControl;
  datoTasaInteres: FormControl;

  constructor(private store: Store<AppState>) {
    this.datoValorCredito = new FormControl('', Validators.required);
    this.datoNumeroCuotas = new FormControl('', Validators.required);
    this.datoTasaInteres = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  calcularPagoCredito(): void {
    let camposIncompletos = this.datoValorCredito.invalid || this.datoNumeroCuotas.invalid || this.datoTasaInteres.invalid;
    let camposNoNumericos = isNaN(this.datoValorCredito.value) || isNaN(this.datoNumeroCuotas.value) || isNaN(this.datoTasaInteres.value);
    if(camposIncompletos || camposNoNumericos) return;

    this.store.dispatch(calcularPlanPago({
      valorCredito: parseFloat(this.datoValorCredito.value), 
      numeroCuotas: parseFloat(this.datoNumeroCuotas.value), 
      tasaInteres: (parseFloat(this.datoTasaInteres.value) / 100) 
    }));
  }
}
