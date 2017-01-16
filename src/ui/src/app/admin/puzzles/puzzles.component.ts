import { QuizPuzzlesNextPuzzle } from './../../state/actions/quiz-state';
import { Store } from '@ngrx/store';
import { IState } from './../../core/states';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-admin-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class AdminPuzzlesComponent implements OnInit {
  puzzle$ = this.store.select(state => state.quizState.puzzle);
  timerRunning = false;
  answersGiven = 0;
  isButton1Disabled = false;
  isButton2Disabled = false;
  isButton3Disabled = false;

  constructor(private store: Store<IState>) { }

  ngOnInit() {
    // set selected player on lowest score, when tied => by player nr.
  }

  selectNextPuzzle() {
    this.store.dispatch(new QuizPuzzlesNextPuzzle());
    this.answersGiven = 0;
    this.isButton1Disabled = false;
    this.isButton2Disabled = false;
    this.isButton3Disabled = false;
  }

  selectAnswer(answer: string) {
    console.log(answer);
  }

  startTimer() {

  }

  stopTimer() {

  }

  goToNextRound() {

  }
}
