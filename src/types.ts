import { type } from "os";
import { Color, Mark } from "./enums";

// export type NormalCard = {
//   color: Color
//   mark: Mark
// }

export type Deck = Card[];


export interface Card {
  getString():string

}


export interface NormalCard extends Card{
  color: Color
  mark: Mark
}

export interface Joker extends Card{
  type:"big" | "small"
}