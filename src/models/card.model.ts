export interface Card {
  id: number;
  languages: Language[];
  image: string;
  flipped: boolean;
  matched: boolean;
}

export interface CardInfo extends Omit<Card, "languages"> {
  word: string;
}

export interface Language {
  id: string;
  word: string;
}

