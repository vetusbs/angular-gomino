import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Rx';
import { subscribeOn } from 'rxjs/operators';
import { Domino, DominoAdapter } from './domino.model';

@Injectable({ providedIn: 'root' })
export class WebsocketService {

  // Our socket connection
  private socket;
  
  private subject = new Rx.Subject<Domino>();

  constructor(private adapter: DominoAdapter) { }

  connect(gameId: string, userId: string): Rx.Subject<Domino> {
    // If you aren't familiar with environment variables then
    // you can hard code `environment.ws_url` as `http://localhost:5000`
    var subject = this.subject;
    var adapter = this.adapter;
    if (window.WebSocket === undefined) {
        
    } else {
        this.socket = new WebSocket(environment.wsUrl + "/ws/" + gameId + "/" + userId)
            
        this.socket.onopen = function() {
            console.log("<p>Socket is open</p>");
        };
        this.socket.onmessage = function (e) {
            console.log("<p> Got some shit:" + e.data + "</p>");
            var domino = adapter.adapt(JSON.parse(e.data))
            subject.next(domino)
        }
        this.socket.onclose = function () {
            console.log("<p>Socket closed</p>");
        }
    }
    return this.subject;
  }

  disconnect() {
      this.socket.close()
  }

  shuffle() {
    this.socket.send(JSON.stringify({ Num: 22 }));
  }
}