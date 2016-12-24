import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-three-six-nine',
  templateUrl: './three-six-nine.component.html',
  styleUrls: ['./three-six-nine.component.scss']
})
export class ThreeSixNineComponent implements OnInit {
  x: number = 300;
  selectedNr: number = 1;
  color: string = 'orange';
  constructor() { }

  ngOnInit() {

  }

  private selectNextNumber() {
    if(this.selectedNr < 12) {
      this.selectedNr++;
    }
  }
}
