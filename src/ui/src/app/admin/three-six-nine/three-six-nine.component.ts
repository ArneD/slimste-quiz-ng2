import { QuizThreeSixNineNextQuestion } from './../../state/actions/quiz-state';
import { Store } from '@ngrx/store';
import { IState } from './../../core/states';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-admin-three-six-nine',
  templateUrl: './three-six-nine.component.html',
  styleUrls: ['./three-six-nine.component.scss']
})
export class AdminThreeSixNineComponent implements OnInit {
  quiz$ = this.store.select(state => state.quizState);
  question: string = '';
  answer: string = '';
  numberOfQuestion: number = 0;

  constructor(private store: Store<IState>) { }

  ngOnInit() {
    this.selectNextQuestion();
    this.quiz$.subscribe(q => {
      if (q.threeSixNine.question) {
        this.question = q.threeSixNine.question.question;
        this.answer = q.threeSixNine.question.answer;
        this.numberOfQuestion = q.threeSixNine.numberOfQuestion;
      }
    });
  }

  selectNextQuestion() {
    this.store.dispatch(new QuizThreeSixNineNextQuestion());
  }

}
