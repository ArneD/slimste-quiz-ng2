import { Store } from '@ngrx/store';
import { IState } from './core/states';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  preventReset$ = this.store.select(state => state);

  constructor(private store: Store<IState>) {
  }

  ngOnInit() {
  }
}
