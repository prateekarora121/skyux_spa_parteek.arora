import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DemoData } from '../../model/user-demo-data';
import { UserModel } from '../../model/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  public userList: UserModel[];
  public updatedUsers = new BehaviorSubject<boolean>(false);

  constructor() {
    this.userList = DemoData.DEMO_USERS;
  }

  public adduser(user: UserModel) {
    let id = this.userList.length - 1;
    user.id = this.userList[id].id + 1 ;
    this.userList.push(user);
    this.updatedUsers.next(true);
  }

  public getUsers() {
    return this.userList;
  }
  public removeUser(id: number) {
    let index = this.userList.findIndex((x) => x.id === id);
    this.userList.splice(index, 1);
    this.updatedUsers.next(true);
  }
}
