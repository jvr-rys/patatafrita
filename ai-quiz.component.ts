import { Component } from '@angular/core';
import { Pregunta } from './quiz.models'; // Asegúrate de importar la interfaz

@Component({
  selector: 'app-ai-quiz',
  templateUrl: './ai-quiz.component.html',
  styleUrls: ['./ai-quiz.component.css']
})
export class AiQuizComponent {
  
  preguntaActualIndex: number = 0;
  puntajeTotal: number = 0;
  quizTerminado: boolean = false;
  resultadoMensaje: string = '';

  // Base de datos de preguntas (Entendimiento de IA)
  preguntas: Pregunta[] = [
    {
      enunciado: "¿Qué es fundamentalmente la Inteligencia Artificial?",
      opciones: [
        { texto: "Magia negra digital", valor: 1 },
        { texto: "Robots que quieren destruirnos", valor: 2 },
        { texto: "Un cerebro humano copiado en un chip", valor: 3 },
        { texto: "Sistemas que imitan funciones cognitivas", valor: 4 },
        { texto: "Algoritmos matemáticos y estadística procesando datos", valor: 5 }
      ]
    },
    {
      enunciado: "¿Cómo 'aprende' una IA como ChatGPT?",
      opciones: [
        { texto: "Busca en Google en tiempo real", valor: 2 },
        { texto: "Tiene conciencia y lee libros por gusto", valor: 1 },
        { texto: "Memoriza frases pre-hechas", valor: 3 },
        { texto: "Analiza patrones en grandes cantidades de texto (entrenamiento)", valor: 5 },
        { texto: "Un humano escribe las respuestas rápido", valor: 1 }
      ]
    },
    {
      enunciado: "Si una IA comete un error o inventa datos, se llama:",
      opciones: [
        { texto: "Mentira intencional", valor: 2 },
        { texto: "Alucinación", valor: 5 },
        { texto: "Fallo de sistema (Bug)", valor: 3 },
        { texto: "Broma", valor: 1 },
        { texto: "Error de cálculo", valor: 4 }
      ]
    },
    {
      enunciado: "¿La IA puede ser creativa?",
      opciones: [
        { texto: "No, solo copia y pega", valor: 2 },
        { texto: "Sí, tiene alma de artista", valor: 1 },
        { texto: "Genera combinaciones nuevas basadas en patrones aprendidos", valor: 5 },
        { texto: "Solo si se lo ordena un humano", valor: 3 },
        { texto: "Es aleatorio totalmente", valor: 2 }
      ]
    },
    {
      enunciado: "¿Cuál es el rol actual de la IA en el trabajo?",
      opciones: [
        { texto: "Reemplazar a todos los humanos ya", valor: 1 },
        { texto: "Hacer el café", valor: 1 },
        { texto: "Copiloto o herramienta de aumento de productividad", valor: 5 },
        { texto: "Solo sirve para jugar ajedrez", valor: 2 },
        { texto: "Automatizar tareas repetitivas simples", valor: 4 }
      ]
    }
  ];

  // Función para procesar la respuesta seleccionada
  responder(valor: number) {
    this.puntajeTotal += valor;
    
    if (this.preguntaActualIndex < this.preguntas.length - 1) {
      this.preguntaActualIndex++;
    } else {
      this.finalizarQuiz();
    }
  }

  finalizarQuiz() {
    this.quizTerminado = true;
    this.calcularNivel();
  }

  calcularNivel() {
    // Puntaje máximo posible: 25 (5 preguntas * 5 puntos)
    // Puntaje mínimo posible: 5 (5 preguntas * 1 punto)
    
    if (this.puntajeTotal <= 10) {
      this.resultadoMensaje = "Novato en IA: Crees que es magia, ¡pero es hora de aprender!";
    } else if (this.puntajeTotal <= 18) {
      this.resultadoMensaje = "Aficionado Tech: Entiendes los conceptos básicos.";
    } else {
      this.resultadoMensaje = "Maestro de la IA: Entiendes que todo son datos y probabilidad.";
    }
  }

  reiniciar() {
    this.preguntaActualIndex = 0;
    this.puntajeTotal = 0;
    this.quizTerminado = false;
  }
}