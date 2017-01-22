/* tslint:disable:no-unused-variable */
import { StoreModule } from '@ngrx/store';
import { ScoreService } from './../../core/score.service';
import { SharedModule } from './../../shared/shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ClientThreeSixNineComponent } from './three-six-nine.component';
import { rootReducer } from '../../state/root-reducer';

describe('ThreeSixNineComponent', () => {
  let component: ClientThreeSixNineComponent;
  let fixture: ComponentFixture<ClientThreeSixNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientThreeSixNineComponent],
      imports: [
        SharedModule,
        StoreModule.provideStore(rootReducer),
      ],
      providers: [ ScoreService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientThreeSixNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
