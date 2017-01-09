import { ScoreIncreaseSelectedPlayer } from './../../state/actions/score-state';
import { QuizThreeSixNineNextQuestion } from './../../state/actions/quiz-state';
import { Store } from '@ngrx/store';
import { IState } from './../../core/states';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'slq-admin-three-six-nine',
  templateUrl: './three-six-nine.component.html',
  styleUrls: ['./three-six-nine.component.scss']
})
export class AdminThreeSixNineComponent implements OnInit, OnDestroy {
  pointsToAdd = 10;
  question$ = this.store.select(state => state.quizState.threeSixNine.question.question);
  answer$ = this.store.select(state => state.quizState.threeSixNine.question.answer);
  numberSubscription$;
  numberOfQuestion: number = 0;

  constructor(private store: Store<IState>) { }

  ngOnInit() {
    this.selectNextQuestion();
    this.numberSubscription$ = this.store
      .select(state => state.quizState.threeSixNine.numberOfQuestion)
      .subscribe(number => this.numberOfQuestion = number);
  }

  selectNextQuestion() {
    this.store.dispatch(new QuizThreeSixNineNextQuestion());
  }

  correct() {
    if (this.numberOfQuestion % 3 === 0) {
        this.store.dispatch(new ScoreIncreaseSelectedPlayer(this.pointsToAdd));
    }
    this.selectNextQuestion();
  }

  incorrect() {

  }

  ngOnDestroy() {
    this.numberSubscription$.unsubscribe();
  }
}
