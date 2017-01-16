/* tslint:disable:no-unused-variable */
import { SharedModule } from './../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { rootReducer } from '../../state/root-reducer';

import { AdminPuzzlesComponent } from './puzzles.component';

describe('PuzzlesComponent', () => {
  let component: AdminPuzzlesComponent;
  let fixture: ComponentFixture<AdminPuzzlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPuzzlesComponent ],
      imports: [
        SharedModule,
        StoreModule.provideStore(rootReducer)
      ]
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
