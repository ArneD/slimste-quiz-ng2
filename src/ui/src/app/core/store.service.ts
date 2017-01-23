import { Store } from '@ngrx/store';
import { IState } from './states';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  constructor(public store: Store<IState>) {
      console.log(this.store);
  }
}

export function serviceFactory(store: Store<IState>) {
  if (!window.opener) {
    console.log('new store');
    return new StoreService(store);
  } else {
    console.log('used store');
    const currentStore = <Store<IState>> window['slqStore'];
    return new StoreService(currentStore);
  }
};

export let storeServiceProvider = {
      provide: StoreService,
      useFactory: serviceFactory,
      deps: [Store]
};
