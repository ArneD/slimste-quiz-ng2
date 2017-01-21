import { ScoreIncreaseSelectedPlayer, ScoreResetHasPlayedQuestion, ScorePlayerPlayedQuestion, ScoreSelectPlayer } from './../../state/actions/score-state';
import { QuizThreeSixNineNextQuestion } from './../../state/actions/quiz-state';
import { Store } from '@ngrx/store';
import { IState, IPlayerState } from './../../core/states';
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
  playerToPlay: IPlayerState;
  player1: IPlayerState;
  player2: IPlayerState;
  player3: IPlayerState;
  endOfRound: boolean = false;

  constructor(private store: Store<IState>) { }

  ngOnInit() {
    this.selectNextQuestion();

    this.store
      .select(state => state.scoreState)
      .subscribe(score => {
        this.player1 = score.player1;
        this.player2 = score.player2;
        this.player3 = score.player3;

        if (score.player1.isSelected && !score.player2.hasPlayedQuestion && !score.player3.hasPlayedQuestion) {
          this.playerToPlay = score.player1;
        } else if (score.player2.isSelected && !score.player1.hasPlayedQuestion && !score.player3.hasPlayedQuestion) {
          this.playerToPlay = score.player2;
        } else if (score.player3.isSelected && !score.player1.hasPlayedQuestion && !score.player2.hasPlayedQuestion) {
          this.playerToPlay = score.player3;
        }
      });

    this.numberSubscription$ = this.store
      .select(state => state.quizState.threeSixNine.numberOfQuestion)
      .subscribe(number => this.numberOfQuestion = number);
  }

  selectNextQuestion() {
    if (this.numberOfQuestion < 15) {
      this.store.dispatch(new QuizThreeSixNineNextQuestion());
      this.store.dispatch(new ScoreResetHasPlayedQuestion());
    } else {
      this.endOfRound = true;
    }
  }

  correct() {
    if (this.numberOfQuestion % 3 === 0) {
        this.store.dispatch(new ScoreIncreaseSelectedPlayer(this.pointsToAdd));
    }
    this.selectNextQuestion();
  }

  incorrect() {
    if (this.player1.isSelected) {
      this.store.dispatch(new ScorePlayerPlayedQuestion(this.player1));
    } else if (this.player2.isSelected) {
      this.store.dispatch(new ScorePlayerPlayedQuestion(this.player2));
    } else {
      this.store.dispatch(new ScorePlayerPlayedQuestion(this.player3));
    }

    if ((this.player1.hasPlayedQuestion && !this.player2.hasPlayedQuestion)) {
      this.store.dispatch(new ScoreSelectPlayer(this.player2));
    } else if (this.player2.hasPlayedQuestion && !this.player3.hasPlayedQuestion) {
      this.store.dispatch(new ScoreSelectPlayer(this.player3));
    } else if (!this.player1.hasPlayedQuestion) {
      this.store.dispatch(new ScoreSelectPlayer(this.player1));
    } else if (this.player1.hasPlayedQuestion && this.player2.hasPlayedQuestion && this.player3.hasPlayedQuestion) {
      this.store.dispatch(new ScoreSelectPlayer(this.playerToPlay));
      this.selectNextQuestion();
    }
  }

  goToNextRound() {

  }

  ngOnDestroy() {
    if (this.numberSubscription$) {
      this.numberSubscription$.unsubscribe();
    }
  }
}
