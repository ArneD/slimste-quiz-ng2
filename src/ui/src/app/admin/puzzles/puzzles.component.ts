import { BaseRound } from './../base-round';
import { StoreService } from './../../core/store.service';
import { NavigateTo } from './../../state/actions/navigation-state';
import { Router } from '@angular/router';
import { ScoreService } from './../../core/score.service';
import { ScoreResetHasPlayedQuestion } from './../../state/actions/score-state';
import { QuizPuzzlesNextPuzzle, QuizPuzzlesAnsweredPuzzleQuestion } from './../../state/actions/quiz-state';
import { IState } from './../../core/states';
import { NavigationType } from './../../core/models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent, NextComponent } from './../components';

@Component({
  selector: 'slq-admin-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class AdminPuzzlesComponent extends BaseRound implements OnInit {

  puzzle$ = this.storeService.store.select(state => state.quizState.puzzle.puzzle);

  isButton1Disabled = false;
  isButton2Disabled = false;
  isButton3Disabled = false;

  constructor(protected storeService: StoreService, protected scoreService: ScoreService, private router: Router) {
    super(storeService, scoreService, 30, 3);
  }

  ngOnInit() {
    this.scoreService.setUpNextRound();
    this.storeService.store.dispatch(new NavigateTo(NavigationType.Puzzles));
  }

  selectNextPuzzle() {
    this.storeService.store.dispatch(new QuizPuzzlesNextPuzzle());
    this.isButton1Disabled = false;
    this.isButton2Disabled = false;
    this.isButton3Disabled = false;

    super.selectNextQuestion();
  }

  selectAnswer(answer: string) {
    this.storeService.store.dispatch(new QuizPuzzlesAnsweredPuzzleQuestion(answer));
    this.scoreService.addScoreForSelectedPlayer(this.pointsToAdd);
    this.answersGiven++;
    if (this.answersGiven === 3) {
      this.timerComponent.stopTimer();
    }
  }

  goToNextRound() {
    this.router.navigate(['/admin/gallery']);
  }
}
