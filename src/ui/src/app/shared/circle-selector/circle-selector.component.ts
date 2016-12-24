import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'slq-circle-selector',
  templateUrl: './circle-selector.component.html',
  styleUrls: ['./circle-selector.component.scss']
})
export class CircleSelectorComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Input() selectedValue: string;

  showCircle: boolean = false;
  textColor: string = 'white';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.selectionChanged();
  }

  private selectionChanged() {
    if (this.selectedValue === this.text) {
      this.showCircle = true;
      this.textColor = 'orange';
    }
    else {
      this.showCircle = false;
      this.textColor = 'white';
    }
  }
}
