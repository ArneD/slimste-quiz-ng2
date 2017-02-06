import { StoreService } from './../../core/store.service';
import { StoreModule } from '@ngrx/store';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { rootReducer } from '../../state/root-reducer';
import { GalleryComponent, ScoreBoardEllipseComponent, ScoreBoardComponent } from '../';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent, ScoreBoardEllipseComponent, ScoreBoardComponent ],
      imports: [
        StoreModule.provideStore(rootReducer)
      ],
      providers: [StoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
