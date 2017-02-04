import { Router } from '@angular/router';
import { ScoreService } from './../../core/score.service';
import { StoreService } from './../../core/store.service';
import { BaseRound } from './../base-round';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-admin-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class AdminVideoComponent extends BaseRound implements OnInit {

  constructor(protected storeService: StoreService,
      protected scoreService: ScoreService,
      private router: Router) {
        super(storeService, scoreService, 10, 5);
   }

  ngOnInit() {
  }

  answer(answer: string) {
    this.pointsToAdd += 10;
  }

  selectNextVideo() {
    this.pointsToAdd = 10;

    super.selectNextQuestion();
  }

  goToNextRound() {

  }
}
