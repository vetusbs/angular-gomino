import { Injectable } from "@angular/core";

export class Domino {
  constructor(
    public id: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class DominoAdapter {
  adapt(item: any): Domino {
    return new Domino(item.Id);
  }
}
