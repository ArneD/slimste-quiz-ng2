import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CircleSelectorComponent,
  ScoreEllipseComponent,
  ThreeSixNineComponent,
  ScoreBoardComponent,
  PuzzlesComponent,
  GalleryComponent } from './';

@NgModule({
  imports: [CommonModule],
  exports: [CircleSelectorComponent,
            ScoreEllipseComponent,
            ThreeSixNineComponent,
            PuzzlesComponent,
            GalleryComponent],
  declarations: [CircleSelectorComponent,
                ScoreEllipseComponent,
                ThreeSixNineComponent,
                ScoreBoardComponent,
                PuzzlesComponent,
                GalleryComponent],
  providers: [],
})
export class SharedModule { }
