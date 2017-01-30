import { ScoreService } from './../../core/score.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'slq-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timerRunning = false;
  @Output() timerStarted = new EventEmitter();
  @Output() timerStopped = new EventEmitter();

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
  }

  startTimer() {
    this.timerRunning = true;
    this.timerStarted.emit();
  }

  stopTimer() {
    this.timerRunning = false;
    this.timerStopped.emit();
  }
}
