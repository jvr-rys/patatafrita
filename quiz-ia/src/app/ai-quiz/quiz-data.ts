import { Question } from './quiz.models';

export const QUESTIONS_AI: Question[] = [
  {
    statement: "¿Qué es fundamentalmente la Inteligencia Artificial?",
    options: [
      { text: "Le preguntas algo y te da el resultado", value: 1 },
      { text: "Un robot que toma decisiones", value: 2 },
      { text: "Sistema que aprende a partir de datos", value: 3 },
      { text: "Un conjunto de técnicas que permiten a las maquinas razonar y adaptarse", value: 4 }
    ]
  },
  {
    statement: "¿Qué características describen mejor un sistema con IA?",
    options: [
      { text: "Ajusta sus respuestas según ejemplos previos", value: 2 },
      { text: "Mejora su desempeño integrando información y contexto", value: 4 },
      { text: "Sigue instrucciones proporcionadas por una persona", value: 1 },
      { text: "Aprende patrones a partir de lo que observa", value: 3 }
    ]
  },
  {
    statement: "¿Qué ejemplo común muestra una IA en acción?",
    options: [
      { text: "Aplicaciones que reconocen voz, imágenes y comportamientos", value: 4 },
      { text: "Una calculadora, decide por sí sola qué operaciones debes resolver", value: 1 },
      { text: "Cuando Netflix recomienda series basándose en lo que has visto y en los patrones de otros usuarios", value: 3 },
      { text: "Adivina lo que quieres escribir en el celular sin que tú pongas una palabra completa", value: 2 }
    ]
  },
  {
    statement: "¿Cual es un beneficio de la IA?",
    options: [
      { text: "Permite resolver problemas complejos de forma más eficientes", value: 4 },
      { text: "Ofrece sugerencias más útiles", value: 2 },
      { text: "Ayuda a ordenar y clasificar información", value: 1 },
      { text: "Ayuda a resolvertareas simples y repetititvas", value: 3 }
    ]
  },
  {
    statement: "¿Cual consideras que es una limitación de la IA actualmente?",
    options: [
      { text: "Se cansa y se vuelve lenta si responde demasiado", value: 1 },
      { text: "La IA no entiende realmente, solo predice patrones de comportamiento", value: 4 },
      { text: "La IA se equivoca porque no siempre tiene suficiente información", value: 3 },
      { text: "La IA no puede aprender nada nuevo despues de ser entrenada", value: 2 }
    ]
  },
  {
    statement: "¿Qué riesgo puede tener el uso de la IA?",
    options: [
      { text: "Que genere resultados sin sentido respecto al contexto", value: 4 },
      { text: "Que dé alguna respuesta incorrecta", value: 1 },
      { text: "Que no corrobore información o fuentes", value: 2 },
      { text: "Que muestre resultados influenciados por datos sesgados", value: 3 }
    ]
  },
  {
    statement: "¿Cómo puede una persona usar la IA de forma responsable?",
    options: [
      { text: "Limitando el uso en temas delicados", value: 3 },
      { text: "Entendiendo los límites y combínandola con criterio personal", value: 4 },
      { text: "La confianza plena en la IA implica la omisión de la verificación de la información que esta proporciona", value: 1 },
      { text: "No compartir datos personales con los agentes de IA", value: 2 }
    ]
  },
  {
    statement: "¿Qué papel juega la IA en la comunicación diaria?",
    options: [
      { text: "Traducir mensajes", value: 2 },
      { text: "Mejorar la claridad y redacción de texto", value: 3 },
      { text: "Facilitar conversaciones más fluidas y adaptadas al contexto", value: 4 },
      { text: "Sugerir palabras mientras escribimos", value: 1 }
    ]
  },
  {
    statement: "¿Qué hace segura la interacción con la IA?",
    options: [
      { text: "Usar contraseñas seguras", value: 1 },
      { text: "No compartir información personal innecesaria", value: 2 },
      { text: "Revisar permisos y configuración", value: 3 },
      { text: "Conocer cómo se usan los datos y tomar decisiones informadas", value: 4 }
    ]
  },
  {
    statement: "¿Cómo puede alguien comenzar a entender la IA?",
    options: [
      { text: "Viendo vídeos resumidos que explican qué es", value: 2 },
      { text: "Adquirir comprensión del funcionamiento mediante la integración progresiva de la práctica y la teoría", value: 4 },
      { text: "Aprendiendo conceptos básicos", value: 3 },
      { text: "Solo utilizar chatbots de inteligencia artificial", value: 1 }
    ]
  }
];