/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ThreeSixNineComponent } from './three-six-nine/three-six-nine.component';
import { CircleSelectorComponent, ScoreEllipseComponent } from './shared';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CircleSelectorComponent, ThreeSixNineComponent, ScoreEllipseComponent
      ],
      imports: [
      RouterTestingModule.withRoutes(
          [{path: '', component: ThreeSixNineComponent}]
        )
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
