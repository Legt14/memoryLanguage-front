import { useState } from "react";
import { CardsComponent } from "../../../../components/cards/cards";
import { useLocation } from "react-router-dom";
import { MenuComponent } from "../../components/menu/menu";

const MemoryPlay = () => {
  const { learn, native } = useLocation().state;
  const [matchCompleted, setMatchCompleted] = useState<boolean>(false)
  const completed = (data:boolean)=>{
    setMatchCompleted(data)
  }

  return (
    <>
      <CardsComponent learnLanguage={learn} nativeLanguage={native} onMatchFinished={completed}/>
      {
        matchCompleted ? <MenuComponent /> : ''
      }
    </>
  );
};
export { MemoryPlay };
