import { Component, OnInit } from '@angular/core';
import { Question, TypeStyle } from './styles.models';
import { QUESTIONS_STYLES } from './styles-data';


@Component({
  selector: 'app-styles-quiz',
  templateUrl: './styles-quiz.component.html',
  styleUrls: ['./styles-quiz.component.css']
})
export class StylesQuizComponent {

  actualQuestion: number = 0;
  doneQuiz: boolean = false;

  mQuestions: Question[] = [];
  
  points = {
    Visual: 0,
    Auditivo: 0,
    Kinestesico: 0
  };

  sWinner: string = '';
  ngOnInit() {
    this.startQuiz();
  }

  startQuiz() {
    const randQuestions = [...QUESTIONS_STYLES].sort(() => Math.random() - 0.5);
    this.mQuestions = randQuestions;
    this.actualQuestion = 0;
    this.doneQuiz = false;
  }

  answer(tipo: TypeStyle) {
    this.points[tipo]++;

    if (this.actualQuestion < this.mQuestions.length - 1) {
      this.actualQuestion++;
    } else {
      this.endQuiz();
    }
  }

  endQuiz() {
    this.doneQuiz = true;
    this.bestStyle();
  }

  bestStyle() {
    const max = Math.max(this.points.Visual, this.points.Auditivo, this.points.Kinestesico);
    
    if (this.points.Visual === max) this.sWinner = 'VISUAL';
    else if (this.points.Auditivo === max) this.sWinner = 'AUDITIVO';
    else this.sWinner = 'KINESTÉSICO';
  }
}