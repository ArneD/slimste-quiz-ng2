import { StoreModule } from '@ngrx/store';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScoreService } from './score.service';
import { rootReducer } from '../state/root-reducer';

describe('ScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreService],
      imports: [
        StoreModule.provideStore(rootReducer)
      ]
    });
  });

  it('should ...', inject([ScoreService], (service: ScoreService) => {
    expect(service).toBeTruthy();
  }));
});
