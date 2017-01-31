import { TimerComponent, NextComponent } from './../components';
import { ScoreResetHasPlayedQuestion } from './../../state/actions/score-state';
import { Router } from '@angular/router';
import { IGalleryQuestion, NavigationType, IGallery } from './../../core/models';
import { NavigateTo } from './../../state/actions/navigation-state';
import { ScoreService } from './../../core/score.service';
import { StoreService } from './../../core/store.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { QuizGalleryNextGalleryQuestion, QuizGalleryNextGallery } from './../../state/actions/quiz-state';

@Component({
  selector: 'slq-admin-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class AdminGalleryComponent implements OnInit, OnDestroy {
  @ViewChild(TimerComponent)
  private timerComponent: TimerComponent;

  @ViewChild(NextComponent)
  private nextComponent: NextComponent;

  numberOfQuestionsCorrect = 0;
  answersNotGiven: Array<string> = [];
  pointsToAdd = 15;
  endOfRound = false;
  questionNr: number;
  gallery: IGallery = null;
  answer: string;
  questionNrSubscription;
  gallerySubscription;

  constructor(private storeService: StoreService,
              private scoreService: ScoreService,
              private router: Router) { }

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

    this.numberOfQuestionsCorrect += 1;
    if (this.numberOfQuestionsCorrect === 10) {
      this.timerComponent.stopTimer();
      this.nextComponent.showNextQuestionButton(true);
      return;
    }

    if (!answer) {
      if (this.numberOfQuestionsCorrect + this.answersNotGiven.length === 10) {
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
      if (this.numberOfQuestionsCorrect + this.answersNotGiven.length === 10) {
        this.timerComponent.stopTimer();
        this.nextComponent.showNextPlayerButton(true);
      } else {
        this.storeService.store.dispatch(new QuizGalleryNextGalleryQuestion());
      }
    } else {
      this.storeService.store.dispatch(new QuizGalleryNextGalleryQuestion());
    }
  }

  startTimer() {
    this.scoreService.startTimerForSelectedPlayer();
  }

  stopTimer() {
    this.scoreService.stopTimer();
    this.scoreService.selectedPlayerPlayedQuestion();

    if (this.numberOfQuestionsCorrect !== 10 && !this.scoreService.haveAllPlayersPlayedQuestion()) {
      this.nextComponent.showNextPlayerButton(true);
    } else if (!this.scoreService.haveAllPlayersPlayedRound()) {
      this.nextComponent.showNextQuestionButton(true);
      this.scoreService.selectNextPlayerForRound();
    } else {
      this.endOfRound = true;
    }
  }

  selectNextGallery() {
    this.storeService.store.dispatch(new QuizGalleryNextGallery());
    this.numberOfQuestionsCorrect = 0;
    this.answersNotGiven = [];
    this.storeService.store.dispatch(new ScoreResetHasPlayedQuestion());
    this.scoreService.selectedPlayerPlayedRound();
  }

  selectNextPlayer() {
    this.scoreService.selectNextPlayerForQuestion();
  }

  showFirstPlayerButtons(): boolean {
    return (this.answersNotGiven.length + this.numberOfQuestionsCorrect !== 10);
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
