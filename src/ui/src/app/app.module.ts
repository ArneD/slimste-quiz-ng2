import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ThreeSixNineComponent } from './three-six-nine';
import { CircleSelectorComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ThreeSixNineComponent,
    CircleSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
