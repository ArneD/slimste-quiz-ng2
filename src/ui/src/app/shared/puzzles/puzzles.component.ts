import { IPuzzleQuestion } from './../../core/models';
import { Store } from '@ngrx/store';
import { IState } from './../../core/states';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'slq-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class PuzzlesComponent implements OnInit, OnDestroy {
  puzzleSubscription;
  answers: Array<string> = [];

  constructor(private store: Store<IState>) { }

  ngOnInit() {
    this.puzzleSubscription = this.store
      .select(state => state.quizState.puzzle)
      .subscribe((puzzle) => {
        if (!puzzle) {
          return;
        }

        this.pushPuzzleToAnswers(puzzle['1']);
        this.pushPuzzleToAnswers(puzzle['2']);
        this.pushPuzzleToAnswers(puzzle['3']);
        this.answers = this.shuffle(this.answers);
      });
  }

  pushPuzzleToAnswers(puzzle: IPuzzleQuestion) {
      this.answers.push(puzzle.clue1);
      this.answers.push(puzzle.clue2);
      this.answers.push(puzzle.clue3);
      this.answers.push(puzzle.clue4);
  }

  ngOnDestroy() {
    if(this.puzzleSubscription) {
      this.puzzleSubscription.unsubscribe();
    }
  }

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle(array: Array<any>): Array<any> {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
