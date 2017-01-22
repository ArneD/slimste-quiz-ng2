import { StoreService } from './../../core/store.service';
import { IPuzzleQuestion, IPuzzle } from './../../core/models';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'slq-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class PuzzlesComponent implements OnInit, OnDestroy {
  puzzleStateSubscription;
  puzzle: IPuzzle;
  answers: Array<any> = [];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.puzzleStateSubscription = this.puzzleStateSubscription = this.storeService.store
      .select(state => state.quizState.puzzle)
      .subscribe((puzzleState) => {

        if (puzzleState.puzzle && puzzleState.puzzle !== this.puzzle) {
          this.puzzle = puzzleState.puzzle;

          this.answers = [];
          this.pushPuzzleToAnswers(this.puzzle['1'], 1);
          this.pushPuzzleToAnswers(this.puzzle['2'], 2);
          this.pushPuzzleToAnswers(this.puzzle['3'], 3);
          this.answers = this.shuffle(this.answers);
        };

        this.answers.forEach(element => {
            if (puzzleState.answered1 && element.puzzleNr === 1) {
              element.css = 'answer1';
            } else if (puzzleState.answered2 && element.puzzleNr === 2) {
              element.css = 'answer2';
            } else if (puzzleState.answered3 && element.puzzleNr === 3) {
              element.css = 'answer3';
            }
          });
      });
  }

  pushPuzzleToAnswers(puzzle: IPuzzleQuestion, puzzleNr: number) {
      this.answers.push({ clue: puzzle.clue1, puzzleNr: puzzleNr, css: '' });
      this.answers.push({ clue: puzzle.clue2, puzzleNr: puzzleNr, css: '' });
      this.answers.push({ clue: puzzle.clue3, puzzleNr: puzzleNr, css: '' });
      this.answers.push({ clue: puzzle.clue4, puzzleNr: puzzleNr, css: '' });
  }

  ngOnDestroy() {
    if (this.puzzleStateSubscription) {
      this.puzzleStateSubscription.unsubscribe();
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
