import { TestBed } from '@angular/core/testing';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
import { UserModel } from '../../model/user.model';
import { UserService } from './user.service';

describe('User Service', () => {
  let mockUserService: UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule],
      providers : [UserService],
      declarations: []
    });
    mockUserService = TestBed.inject(UserService);
  });
  it('should return list of users', () => {
    let userListLength = mockUserService.userList.length;
    let userList: UserModel[] = mockUserService.getUsers();
    expect(userList.length).toEqual(userListLength);
  });
  it('should add new user on adduser function call', () => {
    let user: UserModel = {
      address: 'test',
      dob: new Date('09/09/2021'),
      email: 'test@mail.com',
      firstName: 'test',
      id: 3,
      lastName: 'test',
      number: '9888888888'
    };
    let userListLength = mockUserService.userList.length;
     mockUserService.adduser(user);
    let list: UserModel[] = mockUserService.userList;
    expect(list.length).toEqual(userListLength + 1);
  });
  it('should remove user from the user list', () => {
    let userListLength = mockUserService.userList.length;
    mockUserService.removeUser(3);
    let lengthAfterRemoval = mockUserService.userList.length;
    expect(lengthAfterRemoval).toBeLessThan(userListLength);
  });

});
