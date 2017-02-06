import { IPlayerState } from './../../core/states';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slq-score-ellipse',
  templateUrl: './score-ellipse.component.html',
  styleUrls: ['./score-ellipse.component.scss']
})
export class ScoreEllipseComponent implements OnInit {
  @Input() score: number = 0;
  @Input() isSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
