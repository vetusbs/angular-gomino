import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Domino, DominoAdapter } from "./domino.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Card } from "../core/domino.model";

@Injectable({
  providedIn: "root"
})
export class DominoService {
  private baseUrl = "https://localhost:3000/game/";

  constructor(private http: HttpClient, private adapter: DominoAdapter) {}

  getGame(gameId: String): Observable<Domino> {
    const url = this.baseUrl;
    return this.http
      .get(url + gameId)
      .pipe(map((data: any) => this.adapter.adapt(data))); 
  }

  doMovement(gameId: String, playerId: String, card: Card) : Observable<?> {
    const url = this.baseUrl;
    return this.http
      .put(url + gameId, '{"type":"play", "game":"' + gameId + '", "details": {"left": ' +card.left+ ', "right": '+card.right+', "number": 1 }}', { headers: { 'Content-Type': 'application/json' } })
      .pipe(map((data: any) => this.adapter.adapt(data))); 
  }
}
