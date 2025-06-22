export interface CounterState {
    value: number;
    running: boolean;
  }
  
  export const initialCounterState: CounterState = {
    value: 0,
    running: false
  };