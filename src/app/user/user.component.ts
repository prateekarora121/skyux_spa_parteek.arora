import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { SkyDatepickerConfigService } from '@skyux/datetime';
import { SkyValidators } from '@skyux/validation';
import { UserModel } from '../model/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'my-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public myForm: FormGroup;
  public locale: any;
  private user: UserModel;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private date: SkyDatepickerConfigService
  ) {
  }

  public ngOnInit(): void {
    this.date.maxDate = new Date();
    this.myForm = this.formBuilder.group({
      'firstName': new FormControl(undefined, Validators.required),
      'lastName': new FormControl(undefined, Validators.required),
      'number': new FormControl(),
      'dob': new FormControl(undefined, [Validators.required]),
      'email': new FormControl(undefined, [Validators.required, SkyValidators.email]),
      'address': new FormControl(undefined, Validators.required)
    });
  }

  public get emailControl(): AbstractControl {
    return this.myForm.get('email');
  }
  public get phoneControl(): AbstractControl {
       console.log(
        this.myForm.get('number').errors
       );
    return this.myForm.get('number');
  }
  public get DOBControl(): AbstractControl {
    return this.myForm.get('dob');
  }
  public onSubmit() {
    this.user = new UserModel(this.myForm.value);
    console.log(this.myForm.value);
    this.userService.adduser(this.user);
    this.router.navigate(['user-data-entry-grid']);
  }
  public onCancel() {
    this.router.navigate(['user-data-entry-grid']);
  }
}
