import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CircleSelectorComponent, ScoreEllipseComponent, ThreeSixNineComponent, ScoreBoardComponent }   from './';

@NgModule({
  imports: [CommonModule],
  exports: [CircleSelectorComponent, ScoreEllipseComponent, ThreeSixNineComponent],
  declarations: [CircleSelectorComponent, ScoreEllipseComponent, ThreeSixNineComponent, ScoreBoardComponent],
  providers: [],
})
export class SharedModule { }
