import { Injectable } from '@angular/core';
import { Message } from './message.model';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  msgs: Message[] = [];
  constructor() {}

  getmsgs() {
    return this.msgs;
  }

  addmsg(rmsg: Message) {
    let msg: Message = {
      from: rmsg.from,
      content: rmsg.content,
      to: rmsg.to
    };
    this.msgs.push(msg);
  }
}
