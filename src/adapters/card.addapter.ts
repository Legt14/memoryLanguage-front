import { CardInfo, Card } from "../models/card.model";

export const cardAddapter = (card: Card, lang: string): CardInfo => {
  const wordSelected = card.languages.find((items) => items.id === lang)?.word;
  
  return {
    ...card,
    word: wordSelected ? wordSelected : "",
  };
};
