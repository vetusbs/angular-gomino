import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Domino, DominoAdapter } from "./domino.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DominoService {
  private baseUrl = "https://localhost:3000/game/5983b074-8884-11ea-84d8-a683e74ed2e3";

  constructor(private http: HttpClient, private adapter: DominoAdapter) {}

  list(): Observable<T> {
    const url = this.baseUrl;
    return this.http
      .get(url);
      //.pipe(map((data: any) => data.map(item => this.adapter.adapt(item)))); 
  }
}
