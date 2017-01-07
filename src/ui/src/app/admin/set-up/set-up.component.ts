import { IState } from './../../core/states';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss']
})
export class SetUpComponent implements OnInit {
  player1Name: string = 'Player 1';
  player2Name: string = 'Player 2';
  player3Name: string = 'Player 3';
  numberOfSeconds: number = 60;

  constructor(private store: Store<IState>) { }

  ngOnInit() {
  }

  public submitQuiz() {
    console.log(this.player1Name);
    console.log('submitted');
  }
}
