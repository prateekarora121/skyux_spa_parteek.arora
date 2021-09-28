export class UserModel
{
  id:number;
  firstName:string;
  lastName:string;
  number:string;
  dob:Date;
  email:string;
  address:string;
  public constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
}
}
