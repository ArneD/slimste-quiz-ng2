import { ScoreService } from './../../core/score.service';
import { ScoreResetHasPlayedQuestion } from './../../state/actions/score-state';
import { QuizPuzzlesNextPuzzle, QuizPuzzlesAnsweredPuzzleQuestion } from './../../state/actions/quiz-state';
import { Store } from '@ngrx/store';
import { IState } from './../../core/states';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-admin-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class AdminPuzzlesComponent implements OnInit {
  pointsToAdd = 30;
  puzzle$ = this.store.select(state => state.quizState.puzzle.puzzle);
  endOfRound = false;
  showNextPuzzle = true;
  showNextPlayer = false;
  timerRunning = false;
  answersGiven = 0;
  isButton1Disabled = false;
  isButton2Disabled = false;
  isButton3Disabled = false;

  constructor(private store: Store<IState>, private scoreService: ScoreService) { }

  ngOnInit() {
    this.scoreService.setUpNextRound();
  }

  selectNextPuzzle() {
    this.store.dispatch(new QuizPuzzlesNextPuzzle());
    this.answersGiven = 0;
    this.isButton1Disabled = false;
    this.isButton2Disabled = false;
    this.isButton3Disabled = false;
    this.showNextPuzzle = false;
    this.store.dispatch(new ScoreResetHasPlayedQuestion());
    this.scoreService.selectedPlayerPlayedRound();
  }

  selectAnswer(answer: string) {
    this.store.dispatch(new QuizPuzzlesAnsweredPuzzleQuestion(answer));
    this.scoreService.addScoreForSelectedPlayer(this.pointsToAdd);
    this.answersGiven++;
    if (this.answersGiven === 3) {
      this.stopTimer();
    }
  }

  selectNextPlayer() {
    this.scoreService.selectNextPlayerForQuestion();
    this.showNextPlayer = false;
  }

  startTimer() {
    this.scoreService.startTimerForSelectedPlayer();
    this.timerRunning = true;
  }

  stopTimer() {
    this.scoreService.stopTimer();
    this.timerRunning = false;
    this.scoreService.selectedPlayerPlayedQuestion();

    if (this.answersGiven !== 3 && !this.scoreService.haveAllPlayersPlayedQuestion()) {
      this.showNextPlayer = true;
    } else if (!this.scoreService.haveAllPlayersPlayedRound()) {
      this.showNextPuzzle = true;
      this.scoreService.selectNextPlayerForRound();
    } else {
      this.endOfRound = true;
    }
  }

  goToNextRound() {

  }
}
