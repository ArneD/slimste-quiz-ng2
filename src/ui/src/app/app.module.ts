import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { routingComponents, AppRoutingModule } from './app.routes';
import { QuizService } from './core/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
