export interface Opcion {
  texto: string;
  valor: number; // Del 1 al 5
}

export interface Pregunta {
  enunciado: string;
  opciones: Opcion[];
}