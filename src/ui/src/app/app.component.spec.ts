import { QuizService } from './core/quiz.service';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SetUpComponent } from './admin/set-up/set-up.component';
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, SetUpComponent
      ],
      imports: [
        HttpModule,
        FormsModule,
        StoreModule.provideStore({}),
        RouterTestingModule.withRoutes(
          [{path: '', component: SetUpComponent}]
        )
      ],
      providers: [QuizService]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
