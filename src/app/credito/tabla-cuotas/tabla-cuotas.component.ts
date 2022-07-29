import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { CuotaMensual } from '../models/credito.model';

@Component({
  selector: 'app-tabla-cuotas',
  templateUrl: './tabla-cuotas.component.html',
  styles: [
  ]
})
export class TablaCuotasComponent implements OnInit {
  datosTabla: CuotaMensual[] = [];
  columnasTabla: string[] = ['mes', 'saldoInicial', 'abonoCapital', 'valorInteres', 'valorCuota', 'saldoFinal'];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('cuotasMensuales').subscribe(cuotasMensuales => {
      this.datosTabla = cuotasMensuales;
    });
  }

}
