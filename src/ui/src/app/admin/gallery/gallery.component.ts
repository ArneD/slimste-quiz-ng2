import { TimerComponent, NextComponent } from './../components';
import { ScoreResetHasPlayedQuestion } from './../../state/actions/score-state';
import { Router } from '@angular/router';
import { IGalleryQuestion, NavigationType, IGallery } from './../../core/models';
import { NavigateTo } from './../../state/actions/navigation-state';
import { ScoreService } from './../../core/score.service';
import { StoreService } from './../../core/store.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { QuizGalleryNextGalleryQuestion, QuizGalleryNextGallery } from './../../state/actions/quiz-state';
import { BaseRound } from './../base-round';

@Component({
  selector: 'slq-admin-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class AdminGalleryComponent extends BaseRound implements OnInit, OnDestroy {
  answersNotGiven: Array<string> = [];
  questionNr: number;
  gallery: IGallery = null;
  answer: string;
  questionNrSubscription;
  gallerySubscription;

  constructor(protected storeService: StoreService,
              protected scoreService: ScoreService,
              private router: Router) {
      super(storeService, scoreService, 15, 10);
  }

  ngOnInit() {
    this.scoreService.setUpNextRound();
    this.storeService.store.dispatch(new NavigateTo(NavigationType.Gallery));

    this.questionNrSubscription = this.storeService
      .store
      .select(state => state.quizState.gallery.galleryQuestionNumber)
      .subscribe((questionNr) => {
        this.questionNr = questionNr;
        if (this.questionNr > 0) {
          this.answer = this.gallery[questionNr].answer;
        }
      });

    this.gallerySubscription = this.storeService
      .store
      .select(state => state.quizState.gallery.gallery)
      .subscribe((gallery) => {
        this.gallery = gallery;
      });
  }

  correct(answer: string) {
    this.scoreService.addScoreForSelectedPlayer(this.pointsToAdd);

    if (answer) {
      const index = this.answersNotGiven.indexOf(answer);
      this.answersNotGiven.splice(index, 1);
    }

    this.answersGiven += 1;
    if (this.answersGiven === 10) {
      this.timerComponent.stopTimer();
      this.nextComponent.showNextQuestionButton(true);
      return;
    }

    if (!answer) {
      if (this.answersGiven + this.answersNotGiven.length === 10) {
        this.timerComponent.stopTimer();
        this.nextComponent.showNextPlayerButton(true);
      } else {
        this.storeService.store.dispatch(new QuizGalleryNextGalleryQuestion());
      }
    }
  }

  incorrect() {
    if (this.questionNr > 0) {
      this.answersNotGiven.push(this.answer);
      if (this.answersGiven + this.answersNotGiven.length === 10) {
        this.timerComponent.stopTimer();
        this.nextComponent.showNextPlayerButton(true);
      } else {
        this.storeService.store.dispatch(new QuizGalleryNextGalleryQuestion());
      }
    } else {
      this.storeService.store.dispatch(new QuizGalleryNextGalleryQuestion());
    }
  }

  selectNextGallery() {
    this.storeService.store.dispatch(new QuizGalleryNextGallery());
    this.answersNotGiven = [];

    super.selectNextQuestion();
  }

  showFirstPlayerButtons(): boolean {
    return (this.answersNotGiven.length + this.answersGiven !== 10);
  }

  goToNextRound() {

  }

  ngOnDestroy() {
    if (this.questionNrSubscription) {
      this.questionNrSubscription.unsubscribe();
    }

    if (this.gallerySubscription) {
      this.gallerySubscription.unsubscribe();
    }
  }
}
