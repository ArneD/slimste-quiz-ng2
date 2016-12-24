import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CircleSelectorComponent, ScoreEllipseComponent }   from './';

@NgModule({
  imports: [CommonModule],
  exports: [CircleSelectorComponent, ScoreEllipseComponent],
  declarations: [CircleSelectorComponent, ScoreEllipseComponent],
  providers: [],
})
export class SharedModule { }
