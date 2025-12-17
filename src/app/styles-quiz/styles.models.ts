export type TypeStyle = 'Visual' | 'Auditivo' | 'Kinestesico';

export interface Option {
  text: string;
  style: TypeStyle;
}

export interface Question {
  statement: string;
  options: Option[];
}