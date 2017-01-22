import { Store } from '@ngrx/store';
import { IState } from './../../core/states';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'slq-three-six-nine',
  templateUrl: './three-six-nine.component.html',
  styleUrls: ['./three-six-nine.component.scss']
})
export class ThreeSixNineComponent implements OnInit, OnDestroy {
  selectedNr = this.store.select(state => state.quizState.threeSixNine.numberOfQuestion);
  constructor(private store: Store<IState>) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
