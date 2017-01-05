/* tslint:disable:no-unused-variable */

import { IQuiz } from './models';
import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        QuizService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  describe('loadQuizzes()', () => {
    it('should load quizzes with enough data', inject([QuizService], (service: QuizService) => {
      service.loadQuizzes().subscribe((quizzes: Array<IQuiz>) => {
        expect(quizzes.length).toBeGreaterThan(0);
        expect(quizzes[0].threeSixNine).not.toBeNull();
        expect(quizzes[0].puzzles).not.toBeNull();
        expect(quizzes[0].gallery).not.toBeNull();
        expect(quizzes[0].collectiveMemory).not.toBeNull();
        expect(quizzes[0].finals).toBeGreaterThan(0);
      });
    }));
  });
});
