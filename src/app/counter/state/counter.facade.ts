import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from './counter.actions';
import * as CounterSelectors from './counter.selectors';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterFacade {
  counter$: Observable<number> = this.store.select(CounterSelectors.selectCounterValue);
  running$: Observable<boolean> = this.store.select(CounterSelectors.selectIsRunning);

  constructor(private store: Store) {}

  start() {
    this.store.dispatch(CounterActions.startCounter());
  }

  stop() {
    this.store.dispatch(CounterActions.stopCounter());
  }
  reset() {
    this.store.dispatch(CounterActions.resetCounter()); 
  }
}
