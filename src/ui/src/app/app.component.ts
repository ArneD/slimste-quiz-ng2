import { QuizService } from './core/quiz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private quizService: QuizService) {
    quizService.loadQuiz();
  }
}
