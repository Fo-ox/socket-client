import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) {}

  sendMessage(msg: string): void {
    this.socket.emit('sendMessage', msg);
  }

  getMessage(): Observable<string> {
    return this.socket.fromEvent<string>('newMessage');
  }
}
