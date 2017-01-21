import { ScoreSelectPlayer,
  ScoreResetHasPlayedQuestion,
  ScoreResetHasPlayedRound,
  ScorePlayerPlayedQuestion,
  ScorePlayerPlayedRound,
  ScoreIncreaseSelectedPlayer
} from './../state/actions/score-state';
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
  intervalId;

  timerAudio = new Audio('../../assets/countdown.mp3');
  timerPauseAudio = new Audio('../../assets/countdown-pause.mp3');
  scoreAudio = new Audio('../../assets/addsubtract.mp3');

  constructor(private store: Store<IState>) {
    this.scoreSubscription =
      this.store
      .select(state => state.scoreState)
      .subscribe((score) => {
        this.player1 = score.player1;
        this.player2 = score.player2;
        this.player3 = score.player3;
    });

    this.timerAudio.load();
    this.timerPauseAudio.load();
    this.scoreAudio.load();
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

  public startTimerForSelectedPlayer() {
    this.intervalId = setInterval(() => {
      this.store.dispatch(new ScoreIncreaseSelectedPlayer(-1));
    }, 1000);
    this.timerAudio.play();
  }

  public stopTimer() {
    clearInterval(this.intervalId);
    this.timerAudio.pause();
    this.timerAudio.load();
    this.timerPauseAudio.play();
  }

  public selectedPlayerPlayedQuestion() {
    let player = this.getSelectedPlayer();

    if (player) {
      player.hasPlayedQuestion = true;
      this.store.dispatch(new ScorePlayerPlayedQuestion(player));
    }
  }

  public selectedPlayerPlayedRound() {
    let player = this.getSelectedPlayer();

    if (player) {
      player.hasPlayedRound = true;
      this.store.dispatch(new ScorePlayerPlayedRound(player));
    }
  }

  public haveAllPlayersPlayedQuestion() {
    return this.player1.hasPlayedQuestion &&
      this.player2.hasPlayedQuestion &&
      this.player3.hasPlayedQuestion;
  }

  public haveAllPlayersPlayedRound() {
    return this.player1.hasPlayedRound &&
      this.player2.hasPlayedRound &&
      this.player3.hasPlayedRound;
  }

  public getSelectedPlayer(): IPlayerState {
    let player: IPlayerState;
    if (this.player1.isSelected) {
      player = this.player1;
    } else if (this.player2.isSelected) {
      player = this.player2;
    } else if (this.player3.isSelected) {
      player = this.player3;
    }

    return player;
  }

  public addScoreForSelectedPlayer(scoreToAdd: number) {
    this.store.dispatch(new ScoreIncreaseSelectedPlayer(scoreToAdd));
    this.scoreAudio.load();
    this.scoreAudio.play();
  }

  ngOnDestroy() {
    if (this.scoreSubscription) {
      this.scoreSubscription.unsubscribe();
    }

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.timerAudio.remove();
    this.timerPauseAudio.remove();
    this.scoreAudio.remove();
  }
}
