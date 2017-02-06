import { IPlayerState } from './../../core/states';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slq-score-board-ellipse',
  templateUrl: './score-board-ellipse.component.html',
  styleUrls: ['./score-board-ellipse.component.scss']
})
export class ScoreBoardEllipseComponent implements OnInit {
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
