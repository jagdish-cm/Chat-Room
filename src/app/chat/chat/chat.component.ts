import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import { OnlineUsersService } from '../../shared/online-users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../shared/message.service';
import { Message } from '../../shared/message.model';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  currentUser: User;
  onlineUsers: User[] = [];
  selectedUser: User;
  chatForm: FormGroup;
  gdPref: FormGroup;
  searchUser: FormGroup;
  selGender: string = 'All';
  msg: Message;
  allmsgs: Message[];

  constructor(
    public userService: UserService,
    public onlineUsersService: OnlineUsersService,
    public messageService: MessageService
  ) {
    // this.userService.newUser.subscribe(cUser => {
    //   this.currentUser = cUser;
    // });
  }

  ngOnInit() {
    this.gdPref = new FormGroup({
      selectedGender: new FormControl('All')
    });

    this.currentUser = this.userService.getUser();

    this.onlineUsersService
      .allUsers()
      .subscribe(usersData => (this.onlineUsers = usersData));
    // this.onlineUsersService
    //   .getUsersUpdateListener()
    //   .subscribe((users: User[]) => {
    //     this.onlineUsers = users;
    //   });

    this.allmsgs = this.messageService.getmsgs();

    this.chatForm = new FormGroup({
      content: new FormControl(null, Validators.required),
      from: new FormControl(this.currentUser),
      to: new FormControl(this.selectedUser)
    });
    this.searchUser = new FormGroup({
      suser: new FormControl('')
    });
  }

  onSend() {
    console.log(this.chatForm.value);
    this.msg = this.chatForm.value;
    this.chatForm.patchValue({
      content: ''
    });
    if (this.msg.content != '') {
      this.messageService.addmsg(this.msg);
    }
    console.log(this.messageService.getmsgs());
  }

  onClickUser(clickedUser: User) {
    this.selectedUser = clickedUser;
    this.chatForm.controls['to'].setValue(this.selectedUser);
    console.log(this.selectedUser);
  }

  changeGender(g: string) {
    this.selGender = g;
    console.log(this.selGender);
  }
}
