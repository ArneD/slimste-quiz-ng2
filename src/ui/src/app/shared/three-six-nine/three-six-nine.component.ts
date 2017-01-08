import { Store } from '@ngrx/store';
import { IState } from './../../core/states';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'slq-three-six-nine',
  templateUrl: './three-six-nine.component.html',
  styleUrls: ['./three-six-nine.component.scss']
})
export class ThreeSixNineComponent implements OnInit, OnDestroy {
  subscription;
  selectedNr: number = 0;
  constructor(private store: Store<IState>) { }

  ngOnInit() {
    this.subscription = this.store
      .select(state => state.quizState)
      .subscribe(q => this.selectedNr = q.threeSixNine.numberOfQuestion);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
