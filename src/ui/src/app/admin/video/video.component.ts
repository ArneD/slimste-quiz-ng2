import { QuizVideoNextVideo, QuizVideoPlayVideo, QuizVideoAnsweredQuestion } from './../../state/actions/quiz-state';
import { NavigateTo } from './../../state/actions/navigation-state';
import { Router } from '@angular/router';
import { ScoreService } from './../../core/score.service';
import { StoreService } from './../../core/store.service';
import { BaseRound } from './../base-round';
import { NavigationType } from './../../core/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-admin-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class AdminVideoComponent extends BaseRound implements OnInit {
  videoQuestion$ = this.storeService.store.select(state => state.quizState.video.question);
  showPlayVideo = false;

  isButton1Disabled = false;
  isButton2Disabled = false;
  isButton3Disabled = false;
  isButton4Disabled = false;
  isButton5Disabled = false;

  constructor(protected storeService: StoreService,
      protected scoreService: ScoreService,
      private router: Router) {
        super(storeService, scoreService, 10, 5);
   }

  ngOnInit() {
    this.scoreService.setUpNextRound();
    this.storeService.store.dispatch(new NavigateTo(NavigationType.Video));
  }

  answer(answer: string) {
    this.answersGiven++;
    this.scoreService.addScoreForSelectedPlayer(this.pointsToAdd);
    this.storeService.store.dispatch(new QuizVideoAnsweredQuestion(answer, this.pointsToAdd));

    if (this.answersGiven === 5) {
      this.timerComponent.stopTimer();
    }
    this.pointsToAdd += 10;
  }

  selectNextVideo() {
    this.pointsToAdd = 10;
    this.storeService.store.dispatch(new QuizVideoNextVideo());
    this.showPlayVideo = true;

    this.isButton1Disabled = false;
    this.isButton2Disabled = false;
    this.isButton3Disabled = false;
    this.isButton4Disabled = false;
    this.isButton5Disabled = false;
    super.selectNextQuestion();
  }

  playVideo() {
    this.storeService.store.dispatch(new QuizVideoPlayVideo());
    this.showPlayVideo = false;
  }

  goToNextRound() {

  }
}
