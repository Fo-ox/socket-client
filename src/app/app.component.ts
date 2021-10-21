import {Component, OnInit} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {SocketService} from "./socket.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private socketService: SocketService) {
    this.response$ = socketService.getMessage();
  }
  title = 'socket-client';
  message: string = '';
  response$: Observable<any>;

  _onSendMessage() {
    console.log(this.message);
    this.socketService.sendMessage(this.message);
  }

  ngOnInit(): void {

  }
}
