import { ScoreService } from './core/score.service';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {StoreModule} from '@ngrx/store';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { routingComponents, AppRoutingModule } from './app.routing';
import { QuizService } from './core/quiz.service';

import { rootReducer } from './state/root-reducer';


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
    SharedModule,
    StoreModule.provideStore(rootReducer),
    AdminModule
  ],
  providers: [QuizService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
