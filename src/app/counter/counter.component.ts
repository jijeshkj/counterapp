import { Component } from '@angular/core';
import { CounterFacade } from './state/counter.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter$ = this.facade.counter$;
  running$ = this.facade.running$;

  constructor(private facade: CounterFacade) {}

  start() {
    this.facade.start();
  }

  stop() {
    this.facade.stop();
  }

  reset() {
    this.facade.reset(); 
  }
  
}
