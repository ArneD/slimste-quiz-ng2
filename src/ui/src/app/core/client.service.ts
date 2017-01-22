import { Store } from '@ngrx/store';
import { IState } from './states';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  store: Store<IState>;

  constructor(private currentStore: Store<IState>) {
    if (window.opener) {
      console.log(window.opener['slqStore']);
      this.store = <Store<IState>> window.opener['slqStore'];
    } else {
      this.store = currentStore;
    }
  }
}
