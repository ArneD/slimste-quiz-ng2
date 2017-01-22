/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CircleSelectorComponent, ScoreEllipseComponent, ScoreBoardComponent, ThreeSixNineComponent } from '../';
import { rootReducer } from '../../state/root-reducer';
import { StoreModule } from '@ngrx/store';
import { StoreService } from './../../core/store.service';

describe('SharedThreeSixNineComponent', () => {
  let component: ThreeSixNineComponent;
  let fixture: ComponentFixture<ThreeSixNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeSixNineComponent, CircleSelectorComponent, ScoreEllipseComponent, ScoreBoardComponent ],
      imports: [
        StoreModule.provideStore(rootReducer)
      ],
      providers: [StoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeSixNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
