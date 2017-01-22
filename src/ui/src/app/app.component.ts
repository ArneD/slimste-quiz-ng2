import { Store, StoreModule } from '@ngrx/store';
import { IState } from './core/states';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<IState>) {

  }

  ngOnInit() {
    if (!window.opener) {
      window['slqStore'] = this.store;
    }
  }
}
