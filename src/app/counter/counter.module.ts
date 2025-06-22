import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterFeatureKey, counterReducer } from './state/counter.reducer';
import { CounterEffects } from './state/counter.effects';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  exports: [CounterComponent]

})
export class CounterModule { }
