import { Injectable } from "@angular/core";

export class Domino {
  constructor(public id: string, public players: Player[]) {}
}

export class Player {
  constructor(public name: string) {}
}

@Injectable({
  providedIn: "root"
})
export class DominoAdapter {
  adapt(item: any): Domino {
    var players = item.Players.map(player => new Player(player.Name));
    console.info(players);
    return new Domino(item.Id, players);
  }
}
