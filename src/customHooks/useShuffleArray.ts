import { useEffect, useState } from "react";
import { CardInfo } from "../models/card.model";

const useShuffle = (learn: CardInfo[], native: CardInfo[]) => {
  const [cards, setCards] = useState<CardInfo[]>();
  useEffect(() => {
    const shuffledCards = [...learn, ...native].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);
  return cards;
};

export { useShuffle };
