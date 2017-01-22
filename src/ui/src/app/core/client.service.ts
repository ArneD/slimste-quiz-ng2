import { Store } from '@ngrx/store';
import { IState } from './states';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientStoreService {
  store: Store<IState>;

  constructor() {
    if (window.opener) {
      console.log(window.opener['slqStore']);
      this.store = <Store<IState>> window.opener['slqStore'];
    }
  }
}
