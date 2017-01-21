import { ScoreSelectPlayer, ScoreResetHasPlayedQuestion, ScoreResetHasPlayedRound } from './../state/actions/score-state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState, IPlayerState, IScoreState } from './states';
import { Injectable, OnDestroy, OnInit } from '@angular/core';

@Injectable()
export class ScoreService implements OnDestroy {
  scoreSubscription;
  player1: IPlayerState;
  player2: IPlayerState;
  player3: IPlayerState;

  constructor(private store: Store<IState>) {
    this.scoreSubscription =
      this.store
      .select(state => state.scoreState)
      .subscribe((score) => {
        this.player1 = score.player1;
        this.player2 = score.player2;
        this.player3 = score.player3;
    });
  }

  public setUpNextRound() {
    this.store.dispatch(new ScoreResetHasPlayedQuestion());
    this.store.dispatch(new ScoreResetHasPlayedRound());
    this.selectNextPlayerForRound();
  }

  public selectNextPlayerForRound() {
    if (!this.player1.hasPlayedRound &&
      (this.player2.hasPlayedRound || this.player1.score <= this.player2.score) &&
      (this.player3.hasPlayedRound || this.player1.score <= this.player3.score)) {
        this.store.dispatch(new ScoreSelectPlayer(this.player1));
      } else if (!this.player2.hasPlayedRound &&
      (this.player1.hasPlayedRound || this.player2.score <= this.player1.score) &&
      (this.player3.hasPlayedRound || this.player2.score <= this.player3.score)) {
        this.store.dispatch(new ScoreSelectPlayer(this.player2));
      } else {
        this.store.dispatch(new ScoreSelectPlayer(this.player3));
      }
  }

  public selectNextPlayerForQuestion() {
    if (!this.player1.hasPlayedQuestion &&
      (this.player2.hasPlayedQuestion || this.player1.score <= this.player2.score) &&
      (this.player3.hasPlayedQuestion || this.player1.score <= this.player3.score)) {
        this.store.dispatch(new ScoreSelectPlayer(this.player1));
      } else if (!this.player2.hasPlayedQuestion &&
      (this.player1.hasPlayedQuestion || this.player2.score <= this.player1.score) &&
      (this.player3.hasPlayedQuestion || this.player2.score <= this.player3.score)) {
        this.store.dispatch(new ScoreSelectPlayer(this.player2));
      } else {
        this.store.dispatch(new ScoreSelectPlayer(this.player3));
      }
  }

  ngOnDestroy() {
    if (this.scoreSubscription) {
      this.scoreSubscription.unsubscribe();
    }
  }
}
