export interface Option {
  text: string;
  value: number;
}

export interface Question {
  statement: string;
  options: Option[];
}