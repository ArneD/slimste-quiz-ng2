import { HttpModule } from '@angular/http';
import { QuizService } from './../../core/quiz.service';
import { Store, StoreModule } from '@ngrx/store';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SetUpComponent } from './set-up.component';
import { rootReducer } from '../../state/root-reducer';

describe('SetUpComponent', () => {
  let component: SetUpComponent;
  let fixture: ComponentFixture<SetUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUpComponent ],
      imports: [
        FormsModule,
        HttpModule,
        StoreModule.provideStore(rootReducer)
      ],
      providers: [ QuizService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
