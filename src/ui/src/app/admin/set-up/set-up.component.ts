import { Router } from '@angular/router';
import { IQuiz } from './../../core/models';
import { QuizUpdateAll, QuizUpdateSelected } from './../../state/actions/quiz-state';
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
  numberOfSeconds: number = 70;
  selectableQuizzes$ = this.store.select(state => state.quizState.quizzes);
  selectedQuiz: IQuiz;

  constructor(private store: Store<IState>, private quizService: QuizService,
    private router: Router) { }

  ngOnInit() {
    this.quizService.loadQuizzes().subscribe(quizzes => {
      this.store.dispatch(new QuizUpdateAll(quizzes));
      if(quizzes.length > 0) {
        this.selectedQuiz = quizzes[0];
      }
    });
  }

  public submitQuiz() {
    this.store.dispatch(new ScoreUpdatePlayers(
      {
        name: this.player1Name,
        score: this.numberOfSeconds,
        isSelected: true,
        hasPlayedQuestion: false,
        hasPlayedRound: false
      }, {
        name: this.player2Name,
        score: this.numberOfSeconds,
        isSelected: false,
        hasPlayedQuestion: false,
        hasPlayedRound: false
      }, {
        name: this.player3Name,
        score: this.numberOfSeconds,
        isSelected: false,
        hasPlayedQuestion: false,
        hasPlayedRound: false
      }
    ));

    this.store.dispatch(new QuizUpdateSelected(this.selectedQuiz));
    this.router.navigate(['/admin/three-six-nine']);
  }

  openClient() {
    let wdw = window.open('http://localhost:4200/client', '_blank');
  }
}
