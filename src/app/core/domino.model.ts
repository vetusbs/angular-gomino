import { Injectable } from "@angular/core";

export class Domino {
  constructor(public id: string, public players: Player[], public cards: Card[]) {}
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
    var players = item.players.map(
      player => { 
        var cards = player.Cards.map(
        card => new Card(card.left, card.right))
        return new Player(player.Name, cards)
      }
      );
    
    var cards = item.cards.map(
      card => {
        return new Card(card.left, card.right)
      }
    )
    return new Domino(item.id, players, cards);
  }
}
