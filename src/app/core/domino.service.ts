import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Domino, DominoAdapter } from "./domino.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Movement } from "../core/domino.model";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class DominoService {
  
  private baseUrl = environment.apiUrl + "/game/" ;

  constructor(private http: HttpClient, private adapter: DominoAdapter) {}

  getGame(gameId: String): Observable<Domino> {
    const url = this.baseUrl;
    return this.http
      .get(url + gameId)
      .pipe(map((data: any) => this.adapter.adapt(data))); 
  }

  doMovement(gameId: String, playerId: String, movement: Movement) : Observable<Domino> {
    const url = this.baseUrl;
    return this.http
      .put(url + gameId, '{"type":"play", "game":"' + gameId + '", "details": {"left": ' +movement.card.left+ ', "right": '+movement.card.right+', "isLeft": '+movement.isLeft+' }}', { headers: { 'Content-Type': 'application/json' } })
      .pipe(map((data: any) => this.adapter.adapt(data))); 
  }

  pick(gameId: String, userId: String) : Observable<Domino> {
    const url = this.baseUrl;
    return this.http
      .put(url + gameId, '{"type":"pick", "game":"' + gameId + '", "details" : {"userId": "'+userId+'"}}', { headers: { 'Content-Type': 'application/json' } })
      .pipe(map((data: any) => this.adapter.adapt(data))); 
  }

  addUser(gameId: String, userId: string, userName: string) : Observable<Domino> {
    const url = this.baseUrl;
    return this.http
      .put(url + gameId, '{"type":"addUser", "game":"' + gameId + '", "details": {"userId": "' + userId + '", "userName": "' + userName + '"}}', 
      { headers: { 'Content-Type': 'application/json' } })
      .pipe(map((data: any) => this.adapter.adapt(data))); 
  }
}
