/* tslint:disable:no-unused-variable */

import { ScoreService } from './../../core/score.service';
import { StoreService } from './../../core/store.service';
import { SharedModule } from './../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { rootReducer } from '../../state/root-reducer';

import { AdminPuzzlesComponent } from './puzzles.component';

describe('AdminPuzzlesComponent', () => {
  let component: AdminPuzzlesComponent;
  let fixture: ComponentFixture<AdminPuzzlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPuzzlesComponent ],
      imports: [
        SharedModule,
        StoreModule.provideStore(rootReducer),
        RouterTestingModule
      ],
      providers: [ScoreService, StoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPuzzlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
