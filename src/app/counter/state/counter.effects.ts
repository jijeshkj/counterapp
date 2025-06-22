import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { startCounter, stopCounter, incrementCounter } from './counter.actions';
import { map, switchMap, takeUntil, interval } from 'rxjs';
import { ofType as ngrxOfType } from '@ngrx/effects';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  autoIncrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startCounter),
      switchMap(() =>
        interval(1000).pipe(
          map(() => incrementCounter()),
          takeUntil(this.actions$.pipe(ofType(stopCounter)))
        )
      )
    )
  );
}
