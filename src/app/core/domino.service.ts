import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Domino, DominoAdapter } from "./domino.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DominoService {
  private baseUrl = "https://localhost:3000/game/";

  constructor(private http: HttpClient, private adapter: DominoAdapter) {}

  getGame(gameId: String): Observable<T> {
    const url = this.baseUrl;
    return this.http
      .get(url + gameId);
      //.pipe(map((data: any) => data.map(item => this.adapter.adapt(item)))); 
  }
}
