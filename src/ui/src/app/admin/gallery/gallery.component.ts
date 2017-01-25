import { Router } from '@angular/router';
import { ScoreIncreaseSelectedPlayer } from './../../state/actions/score-state';
import { IGalleryQuestion, NavigationType } from './../../core/models';
import { NavigateTo } from './../../state/actions/navigation-state';
import { ScoreService } from './../../core/score.service';
import { StoreService } from './../../core/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-admin-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class AdminGalleryComponent implements OnInit {
  numberOfQuestionsCorrect = 0;
  answersNotGiven: Array<string> = [];
  pointsToAdd = 15;

  constructor(private storeService: StoreService,
              private scoreService: ScoreService,
              private router: Router) { }

  ngOnInit() {
    this.scoreService.setUpNextRound();
    this.storeService.store.dispatch(new NavigateTo(NavigationType.Gallery));
  }

  correct() {
    this.storeService.store.dispatch(new ScoreIncreaseSelectedPlayer(this.pointsToAdd));
    this.numberOfQuestionsCorrect += 1;
    if (this.numberOfQuestionsCorrect === 10 ||
        this.numberOfQuestionsCorrect + this.answersNotGiven.length === 10) {
      this.stopTimer();
    }
  }

  incorrect() {
    if (this.numberOfQuestionsCorrect === 10 ||
        this.numberOfQuestionsCorrect + this.answersNotGiven.length === 10) {
      this.stopTimer();
    }
  }

  startTimer() {

  }

  stopTimer() {

  }

  nextGallery() {

  }

  nextPlayer() {

  }

  goToNextRound() {

  }
}
