import { Component, OnInit } from '@angular/core';
import { Question } from './quiz.models';
import { QUESTIONS_AI } from './quiz-data'; 

@Component({
  selector: 'app-ai-quiz',
  templateUrl: './ai-quiz.component.html',
  styleUrls: ['./ai-quiz.component.css']
})
export class AiQuizComponent implements OnInit {
  
  actualQuestion: number = 0;
  totalScore: number = 0;
  doneQuiz: boolean = false;
  result: string = '';

  mQuestions: Question[] = [];

  ngOnInit() {
    this.iniciarQuiz();
  }

  iniciarQuiz() {
    const randQuestions = [...QUESTIONS_AI].sort(() => Math.random() - 0.5);
    this.mQuestions = randQuestions;
    this.actualQuestion = 0;
    this.totalScore = 0;
    this.doneQuiz = false;
  }

  answer(valor: number) {
    this.totalScore += valor;
    if (this.actualQuestion < this.mQuestions.length - 1) {
      this.actualQuestion++;
    } else {
      this.finalizarQuiz();
    }
  }

  finalizarQuiz() {
    this.doneQuiz = true;
    this.calcularNivel();
  }

  calcularNivel() {
    if (this.totalScore <= 17) {
      this.result = "Novato en IA: Crees que es magia, ¡pero es hora de aprender!";
    } else if (this.totalScore <= 25) {
      this.result = "Aficionado Tech: Entiendes los conceptos básicos.";
    } else if (this.totalScore <= 31) {
      this.result = "Avanzado Tech: Entiendes conceptos avanzados sobre IA.";
    } else {
      this.result = "Maestro de la IA: Entiendes que todo son datos y probabilidad.";
    }
  }

  restart() {
    this.iniciarQuiz();
  }
}