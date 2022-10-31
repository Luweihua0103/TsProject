import { Color, Mark } from "./enums";
import { Card, Deck, NormalCard } from "./types";

export function createDeck(): Deck {
  const deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);
  for (const m of marks) {
    for (const c of colors) {
      //  const card:NormalCard={
      //   color:c,
      //   mark:m,
      //   getString(){
      //     return this.color + this.mark
      //   }
      //  }
      //  deck.push(card)

      // 使用类型断言
      // deck.push(<Card>{
      //   color: c,
      //   marks: m,
      //   getString() {
      //     return this.color + this.mark
      //   }
      // })

        deck.push({
        color: c,
        marks: m,
        getString() {
          return this.color + this.mark
        }
      } as Card)
    }
  }

  let joker:Joker = {
    type:"small",
    getString(){
      return "jq"
    }
  }

  deck.push(joker)

  joker = {
    type:"big",
    getString(){
      return "JO"
    }
  }

  deck.push(joker)

  return deck;
}

export function printDeck(deck: Deck) {
  let result = "\n";
  deck.forEach((card, i) => {
    let str = card.getString();

    result += str + "\t";
    if ((i + 1) % 4 === 0) {
      result += "\n"
    }
  })

  console.log(result);
}