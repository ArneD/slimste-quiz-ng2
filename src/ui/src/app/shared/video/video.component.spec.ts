
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreService } from './../../core/store.service';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../../state/root-reducer';
import { VideoComponent, ScoreBoardEllipseComponent, ScoreBoardComponent } from '../';
import { YoutubePlayerModule } from 'ng2-youtube-player';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoComponent, ScoreBoardEllipseComponent, ScoreBoardComponent ],
      imports: [
        StoreModule.provideStore(rootReducer),
        YoutubePlayerModule
      ],
      providers: [StoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
