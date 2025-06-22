import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';
import { counterFeatureKey } from './counter.reducer';

export const selectCounterState = createFeatureSelector<CounterState>(counterFeatureKey);

export const selectCounterValue = createSelector(
  selectCounterState,
  (state) => state.value
);

export const selectIsRunning = createSelector(
  selectCounterState,
  (state) => state.running
);
