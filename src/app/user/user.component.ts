import {
  Component, OnInit
} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkyValidators } from '@skyux/validation';
import { UserModel } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'my-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  public myForm: FormGroup;
  private user:UserModel;
  // public showAction = true;

  // public showCheckbox = true;

  // public showContent = true;

  // public showTitle = true;

  constructor(

    private formBuilder: FormBuilder,
    private userService:UserService,
    private router:Router
  ) { }

  public ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      'firstName':new FormControl(null,Validators.required),
      'lastName':new FormControl(null,Validators.required),
      'number':new FormControl(null,[Validators.minLength(10),Validators.maxLength(10)]),
      'dob':new FormControl(null,[Validators.required]),
      'email':new FormControl(null, [Validators.required,SkyValidators.email]),
      'address':new FormControl(null,Validators.required),

      // myDate: new FormControl(new Date(1999, 10, 5))
    });


    // this.myForm = this.formBuilder.group({
    //   email: new FormControl(undefined, [
    //     Validators.required,
    //     SkyValidators.email
    //   ])
    // });
  }

  public get emailControl(): AbstractControl {
    return this.myForm.get('email');
  }

  public onSubmit()
  {
  this.user=new UserModel(this.myForm.value);
  this.userService.adduser(this.user);
  console.log(this.userService.getUsers());
  this.router.navigate(['user-data-entry-grid']);
  }
  public onCancel()
  {
    this.router.navigate(['user-data-entry-grid']);
  }

}
