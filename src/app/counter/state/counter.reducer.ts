import { createReducer, on } from '@ngrx/store';
import { initialCounterState } from './counter.state';
import * as CounterActions from './counter.actions';

export const counterFeatureKey = 'counter';

export const counterReducer = createReducer(
  initialCounterState,
  on(CounterActions.startCounter, (state) => ({ ...state, running: true })),
  on(CounterActions.stopCounter, (state) => ({ ...state, running: false })),
  on(CounterActions.incrementCounter, (state) =>
    state.running ? { ...state, value: state.value + 1 } : state
  ),
  on(CounterActions.resetCounter, state => ({
    ...state,
    value: 0,
    running: false
  }))


);
