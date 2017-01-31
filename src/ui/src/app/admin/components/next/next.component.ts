import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'slq-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {
  private showNextQuestion = true;
  private showNextPlayer = false;
  @Input() endOfRound = false;

  @Output() nextPlayerClicked = new EventEmitter();
  @Output() nextQuestionClicked = new EventEmitter();
  @Output() nextRoundClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectNextQuestion() {
    this.showNextQuestion = false;
    this.nextQuestionClicked.emit();
  }

  selectNextPlayer() {
    this.showNextPlayer = false;
    this.nextPlayerClicked.emit();
  }

  goToNextRound() {
    this.nextRoundClicked.emit();
  }

  showNextPlayerButton(show: boolean) {
    this.showNextPlayer = show;
  }

  showNextQuestionButton(show: boolean) {
    this.showNextQuestion = show;
  }
}
