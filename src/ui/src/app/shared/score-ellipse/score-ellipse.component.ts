import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'slq-score-ellipse',
  templateUrl: './score-ellipse.component.html',
  styleUrls: ['./score-ellipse.component.scss']
})
export class ScoreEllipseComponent implements OnInit, OnChanges {
  @Input() numberOfSeconds: number = 60;
  @Input() isSelected: boolean = false;
  textColor: string = 'white';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.isSelected) {
      this.textColor = 'orange';
    }
    else {
      this.textColor = 'white';
    }
  }
}
