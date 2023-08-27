import { Card } from "../models/card.model";

function getRandomElements(count: number, array: Card[]) {
  if (count >= array.length) {
    // Si el tamaño del subconjunto es igual o mayor al tamaño del array,
    // simplemente devolvemos el array completo.
    return array;
  }

  // Aplicamos el algoritmo Fisher-Yates Shuffle para mezclar el array.
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  // Tomamos los primeros 'subsetSize' elementos como el subconjunto aleatorio.
  return array.slice(0, count);
}

export { getRandomElements };
