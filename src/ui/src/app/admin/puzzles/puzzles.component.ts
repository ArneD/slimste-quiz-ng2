import { NavigateTo } from './../../state/actions/navigation-state';
import { Router } from '@angular/router';
import { ScoreService } from './../../core/score.service';
import { ScoreResetHasPlayedQuestion } from './../../state/actions/score-state';
import { QuizPuzzlesNextPuzzle, QuizPuzzlesAnsweredPuzzleQuestion } from './../../state/actions/quiz-state';
import { Store } from '@ngrx/store';
import { IState } from './../../core/states';
import { NavigationType } from './../../core/models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent, NextComponent } from './../components';

@Component({
  selector: 'slq-admin-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class AdminPuzzlesComponent implements OnInit {
  @ViewChild(TimerComponent)
  private timerComponent: TimerComponent;

  @ViewChild(NextComponent)
  private nextComponent: NextComponent;

  pointsToAdd = 30;
  puzzle$ = this.store.select(state => state.quizState.puzzle.puzzle);
  endOfRound = false;
  answersGiven = 0;
  isButton1Disabled = false;
  isButton2Disabled = false;
  isButton3Disabled = false;

  constructor(private store: Store<IState>, private scoreService: ScoreService, private router: Router) { }

  ngOnInit() {
    this.scoreService.setUpNextRound();
    this.store.dispatch(new NavigateTo(NavigationType.Puzzles));
  }

  selectNextPuzzle() {
    this.store.dispatch(new QuizPuzzlesNextPuzzle());
    this.answersGiven = 0;
    this.isButton1Disabled = false;
    this.isButton2Disabled = false;
    this.isButton3Disabled = false;

    this.store.dispatch(new ScoreResetHasPlayedQuestion());
    this.scoreService.selectedPlayerPlayedRound();
  }

  selectAnswer(answer: string) {
    this.store.dispatch(new QuizPuzzlesAnsweredPuzzleQuestion(answer));
    this.scoreService.addScoreForSelectedPlayer(this.pointsToAdd);
    this.answersGiven++;
    if (this.answersGiven === 3) {
      this.timerComponent.stopTimer();
    }
  }

  selectNextPlayer() {
    this.scoreService.selectNextPlayerForQuestion();
  }

  startTimer() {
    this.scoreService.startTimerForSelectedPlayer();
  }

  stopTimer() {
    this.scoreService.stopTimer();
    this.scoreService.selectedPlayerPlayedQuestion();

    if (this.answersGiven !== 3 && !this.scoreService.haveAllPlayersPlayedQuestion()) {
      this.nextComponent.showNextPlayerButton(true);
    } else if (!this.scoreService.haveAllPlayersPlayedRound()) {
      this.nextComponent.showNextQuestionButton(true);
      this.scoreService.selectNextPlayerForRound();
    } else {
      this.endOfRound = true;
    }
  }

  goToNextRound() {
    this.router.navigate(['/admin/gallery']);
  }
}
