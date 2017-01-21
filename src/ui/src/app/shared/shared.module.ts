import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CircleSelectorComponent, ScoreEllipseComponent, ThreeSixNineComponent, ScoreBoardComponent, PuzzlesComponent }   from './';

@NgModule({
  imports: [CommonModule],
  exports: [CircleSelectorComponent, ScoreEllipseComponent, ThreeSixNineComponent, PuzzlesComponent],
  declarations: [CircleSelectorComponent, ScoreEllipseComponent, ThreeSixNineComponent, ScoreBoardComponent, PuzzlesComponent],
  providers: [],
})
export class SharedModule { }
