import { IState } from './core/states';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {StoreModule, Store} from '@ngrx/store';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { routingComponents, AppRoutingModule } from './app.routing';
import { QuizService } from './core/quiz.service';
import { StoreService, storeServiceProvider } from './core/store.service';
import { ScoreService } from './core/score.service';

import { rootReducer } from './state/root-reducer';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(rootReducer),
    AdminModule,
    ClientModule,
    SharedModule,
    YoutubePlayerModule,
  ],
  providers: [
    QuizService,
    ScoreService,
    storeServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
