import { IQuiz } from './../../core/models';
import { QuizzesUpdateAll, QuizzesUpdateSelected } from './../../state/actions/quiz-state';
import { QuizService } from './../../core/quiz.service';
import { ScoreUpdatePlayers } from './../../state/actions/score-state';
import { IState, IPlayerState } from './../../core/states';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss']
})
export class SetUpComponent implements OnInit {
  player1Name: string = 'Player 1';
  player2Name: string = 'Player 2';
  player3Name: string = 'Player 3';
  numberOfSeconds: number = 60;
  selectableQuizzes$ = this.store.select(state => state.quizState.quizzes);
  selectedQuiz: IQuiz;

  constructor(private store: Store<IState>, private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.loadQuizzes().subscribe(quizzes => {
      this.store.dispatch(new QuizzesUpdateAll(quizzes));
    });
  }

  public submitQuiz() {
    this.store.dispatch(new ScoreUpdatePlayers(
      {
        name: this.player1Name,
        score: this.numberOfSeconds,
        isSelected: true,
        hasPlayed: false
      }, {
        name: this.player2Name,
        score: this.numberOfSeconds,
        isSelected: false,
        hasPlayed: false
      }, {
        name: this.player3Name,
        score: this.numberOfSeconds,
        isSelected: false,
        hasPlayed: false
      }
    ));

    this.store.dispatch(new QuizzesUpdateSelected(this.selectedQuiz));
  }
}
