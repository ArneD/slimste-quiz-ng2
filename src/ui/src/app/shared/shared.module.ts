import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CircleSelectorComponent }   from './';

@NgModule({
  imports: [CommonModule],
  exports: [CircleSelectorComponent],
  declarations: [CircleSelectorComponent],
  providers: [],
})
export class SharedModule { }
