import { IPlayerState } from './../../core/states';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slq-score-ellipse',
  templateUrl: './score-ellipse.component.html',
  styleUrls: ['./score-ellipse.component.scss']
})
export class ScoreEllipseComponent implements OnInit {
  @Input() player: IPlayerState = {
    name: '',
    score: 0,
    isSelected: false,
    hasPlayedQuestion: false,
    hasPlayedRound: false
  };

  constructor() { }

  ngOnInit() {
  }
}
