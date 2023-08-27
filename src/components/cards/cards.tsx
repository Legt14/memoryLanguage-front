import jsonCards from "../../data/cards.json";
import { CardComponent } from "../card/card";
import { useShuffle } from "../../customHooks/useShuffleArray";
import { CardsProps } from "../../models/cards.model";
import { useEffect, useState } from "react";
import { Card, CardInfo } from "../../models/card.model";
import { getRandomElements } from "../../utility/getRandomElements";
import { cardAddapter } from "../../adapters/card.addapter";

const CardsComponent = ({
  learnLanguage,
  nativeLanguage,
  onMatchFinished,
}: CardsProps) => {
  const [choiseOne, setChoiseOne] = useState<CardInfo | null>();
  const [choiseTwo, setChoiseTwo] = useState<CardInfo | null>();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const cardData: Card[] = jsonCards;
  const learn: CardInfo[] = [];
  const native: CardInfo[] = [];
  const cards = useShuffle(learn, native);
  const gridSize = 8;
  const randomCards = getRandomElements(gridSize, cardData);

  randomCards.map((pair) => {
    learn.push(cardAddapter(pair, nativeLanguage));
    native.push(cardAddapter(pair, learnLanguage));
  });

  //   const cards: Connection = {
  //     url: "",
  //   };
  //   const cardsData = useConnection(cards);

  const handleCardClick = (data: CardInfo) => {
    if (
      flippedCards.length < 2 && // Limitar a dos cartas seleccionadas
      !matchedPairs.includes(data.id) && // No seleccionar cartas que ya hicieron match
      !data.flipped // No seleccionar una carta ya seleccionada
    ) {
      !choiseOne ? setChoiseOne(data) : setChoiseTwo(data);
      data.flipped = true;
      setFlippedCards([...flippedCards, data.id]);
    }
  };

  useEffect(() => {
    if (choiseOne && choiseTwo) {
      if (choiseOne.image === choiseTwo.image) {
        setMatchedPairs([...matchedPairs, choiseOne.id, choiseTwo.id]);
        setFlippedCards([]);
        resetChoise();
      } else {
        setTimeout(() => {
          choiseOne.flipped = false;
          choiseTwo.flipped = false;
          setFlippedCards([]);
          resetChoise();
        }, 800);
      }
    }
  }, [choiseOne, choiseTwo, matchedPairs]);

  const resetChoise = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
  };
  if (matchedPairs.length === 16) {
    onMatchFinished(true)
  }

  return (
    <>
      <section className="p-10 gap-x-4 gap-y-4  overflow-hidden grid grid-cols-4 justify-items-center content-center ">
        {cards ? (
          cards.map((pair: CardInfo, index: number) => (
            <CardComponent
              key={index}
              id={pair.id}
              word={pair.word}
              image={pair.image}
              flipped={pair.flipped}
              matched={pair.matched}
              onClick={() => handleCardClick(pair)}
            />
          ))
        ) : (
          <span>loading</span>
        )}
      </section>
    </>
  );
};

export { CardsComponent };
