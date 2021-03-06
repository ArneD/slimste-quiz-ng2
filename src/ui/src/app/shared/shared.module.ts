import { YoutubePlayerModule } from 'ng2-youtube-player';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CircleSelectorComponent,
  ScoreEllipseComponent,
  ThreeSixNineComponent,
  ScoreBoardComponent,
  PuzzlesComponent,
  GalleryComponent,
  VideoComponent,
  ScoreBoardEllipseComponent } from './';

@NgModule({
  imports: [CommonModule, YoutubePlayerModule],
  exports: [CircleSelectorComponent,
            ScoreEllipseComponent,
            ThreeSixNineComponent,
            PuzzlesComponent,
            GalleryComponent,
            VideoComponent],
  declarations: [CircleSelectorComponent,
                ScoreEllipseComponent,
                ThreeSixNineComponent,
                ScoreBoardComponent,
                PuzzlesComponent,
                GalleryComponent,
                VideoComponent,
                ScoreBoardEllipseComponent],
  providers: [],
})
export class SharedModule { }
