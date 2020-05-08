import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Rx';
import { subscribeOn } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WebsocketService {

  // Our socket connection
  private socket;
  
  private subject = new Rx.Subject<string>();

  constructor() { }

  connect(gameId: string, userId: string): Rx.Subject<string> {
    // If you aren't familiar with environment variables then
    // you can hard code `environment.ws_url` as `http://localhost:5000`
    var subject = this.subject;
    if (window.WebSocket === undefined) {
        
    } else {
        this.socket = new WebSocket(environment.wsUrl + "/ws/" + gameId + "/" + userId)
            
        this.socket.onopen = function() {
            console.log("<p>Socket is open</p>");
        };
        this.socket.onmessage = function (e) {
            subject.next("test")
            console.log("<p> Got some shit:" + e.data + "</p>");
        }
        this.socket.onclose = function () {
            console.log("<p>Socket closed</p>");
        }
    }
    return this.subject;
  }
}