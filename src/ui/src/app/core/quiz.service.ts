import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as Models from './models';

import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {
  quizFile: 'quiz.json';

  constructor(private http: Http) { }

  public loadQuizzes() {
    return this.http
      .get('quiz.json')
      .map(res => {
        return res.json().data;
      });
  }
}
