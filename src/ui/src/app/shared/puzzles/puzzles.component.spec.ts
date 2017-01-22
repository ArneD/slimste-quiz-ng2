/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { PuzzlesComponent, ScoreEllipseComponent, ScoreBoardComponent } from '../';
import { rootReducer } from '../../state/root-reducer';
import { StoreService } from './../../core/store.service';

describe('SharedPuzzlesComponent', () => {
  let component: PuzzlesComponent;
  let fixture: ComponentFixture<PuzzlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzlesComponent, ScoreBoardComponent, ScoreEllipseComponent ],
      imports: [
        StoreModule.provideStore(rootReducer)
      ],
      providers: [StoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
