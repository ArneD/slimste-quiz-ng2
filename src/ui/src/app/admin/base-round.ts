import { ViewChild } from '@angular/core';
import { TimerComponent, NextComponent } from './components';
import { ScoreResetHasPlayedQuestion } from './../state/actions/score-state';
import { StoreService } from './../core/store.service';
import { ScoreService } from './../core/score.service';

export abstract class BaseRound {
  @ViewChild(TimerComponent)
  timerComponent: TimerComponent;

  @ViewChild(NextComponent)
  nextComponent: NextComponent;

  endOfRound = false;
  answersGiven = 0;

  constructor(protected storeService: StoreService,
    protected scoreService: ScoreService,
    protected pointsToAdd: number,
    private answersPerQuestion) {
  }

  selectNextPlayer() {
    this.scoreService.selectNextPlayerForQuestion();
  }

  selectNextQuestion() {
    this.answersGiven = 0;
    this.storeService.store.dispatch(new ScoreResetHasPlayedQuestion());
    this.scoreService.selectedPlayerPlayedRound();
  }

  startTimer() {
    this.scoreService.startTimerForSelectedPlayer();
  }

  stopTimer() {
    this.scoreService.stopTimer();
    this.scoreService.selectedPlayerPlayedQuestion();

    if (this.answersGiven !== this.answersPerQuestion && !this.scoreService.haveAllPlayersPlayedQuestion()) {
      this.nextComponent.showNextPlayerButton(true);
    } else if (!this.scoreService.haveAllPlayersPlayedRound()) {
      this.nextComponent.showNextQuestionButton(true);
      this.scoreService.selectNextPlayerForRound();
    } else {
      this.endOfRound = true;
    }
  }

  abstract goToNextRound();
}
