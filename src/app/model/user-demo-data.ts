import { UserModel } from "./user.model";

export class DemoData{
 static DEMO_USERS:UserModel[]  =[

{
  id:1,
firstName:'test1',
lastName:'test1',
number:'9888889999',
dob:new Date('09/09/1998'),
email:'test@gmail.com',
address:'test1'
},
{
  id:2,
  firstName:'test2',
  lastName:'test2',
  number:'9888889999',
  dob:new Date('06/09/1998'),
  email:'test2@gmail.com',
  address:'test2'
  }

]
}
