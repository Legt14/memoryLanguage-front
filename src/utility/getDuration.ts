import { useState } from "react";

export const getDuration = () => {
  const [gameFinished, setGameFinished] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  return [gameFinished, gameTime, startTime]
};
