/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScoreEllipseComponent } from './../score-ellipse/score-ellipse.component';
import { StoreModule } from '@ngrx/store';

import { StoreService } from './../../core/store.service';
import { ScoreBoardComponent } from './score-board.component';
import { rootReducer } from '../../state/root-reducer';

describe('ScoreBoardComponent', () => {
  let component: ScoreBoardComponent;
  let fixture: ComponentFixture<ScoreBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreBoardComponent, ScoreEllipseComponent ],
      imports: [
        StoreModule.provideStore(rootReducer)
      ],
      providers: [ StoreService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
