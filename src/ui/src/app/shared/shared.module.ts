import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CircleSelectorComponent, ScoreEllipseComponent, ThreeSixNineComponent }   from './';

@NgModule({
  imports: [CommonModule],
  exports: [CircleSelectorComponent, ScoreEllipseComponent, ThreeSixNineComponent],
  declarations: [CircleSelectorComponent, ScoreEllipseComponent, ThreeSixNineComponent],
  providers: [],
})
export class SharedModule { }
