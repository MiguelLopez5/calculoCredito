import { ActionReducerMap } from '@ngrx/store';
import { creditoReducer } from './credito/credito.reducer';
import { CuotaMensual } from './credito/models/credito.model';

export interface AppState {
  cuotasMensuales: CuotaMensual[]
}

export const appReducers: ActionReducerMap<AppState> = {
  cuotasMensuales: creditoReducer
}