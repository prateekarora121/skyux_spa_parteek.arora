export class UserModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public number: string;
  public dob: Date;
  public email: string;
  public address: string;
  public constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }
}
