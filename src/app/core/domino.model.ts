import { Injectable } from "@angular/core";

export class Domino {
  constructor(public id: string, public players: Player[]) {}
}

export class Player {
  constructor(public name: string, public cards: Card[]) {}
}

export class Card {
  constructor(public left: Number, public right: Number) {}
}

@Injectable({
  providedIn: "root"
})
export class DominoAdapter {
  adapt(item: any): Domino {
    var players = item.Players.map(
      player => { 
        var cards = player.Cards.map(
        card => new Card(card.left, card.right))
        console.info("adapter")
        console.info(cards)
        return new Player(player.Name, cards)
      }
      );
    
    return new Domino(item.Id, players);
  }
}
