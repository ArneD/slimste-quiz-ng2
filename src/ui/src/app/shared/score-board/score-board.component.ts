import { IState } from './../../core/states';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {
  player1$ = this.store.select(state => state.scoreState.player1);
  player2$ = this.store.select(state => state.scoreState.player2);
  player3$ = this.store.select(state => state.scoreState.player3);

  constructor(private store: Store<IState>) { }

  ngOnInit() {
  }

}
