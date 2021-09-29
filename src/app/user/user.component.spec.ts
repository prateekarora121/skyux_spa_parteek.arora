import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
import { UserService } from '../shared/services/user.service';
// Component we're going to test
import { UserComponent } from './user.component';

describe('User component', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all labels', () => {
    const firstNameLabel = fixture.nativeElement.querySelector('#firstNameLabel');
    const lastNameLabel = fixture.nativeElement.querySelector('#lastNameLabel');
    const numberLabel = fixture.nativeElement.querySelector('#numberLabel');
    const dobLabel = fixture.nativeElement.querySelector('.dobLabel');
    const emailLabel = fixture.nativeElement.querySelector('.emailLabel');
    const addressLabel = fixture.nativeElement.querySelector('#addressLabel');

    // Using custom expect matchers
    expect(firstNameLabel).toBeVisible();
    expect(lastNameLabel).toBeVisible();
    expect(numberLabel).toBeVisible();
    expect(dobLabel).toBeVisible();
    expect(emailLabel).toBeVisible();
    expect(addressLabel).toBeVisible();
  });

  it('should display all input fields', () => {
    const inputFirstName = fixture.nativeElement.querySelector('#firstName');
    const inputLastName = fixture.nativeElement.querySelector('#lastName');
    const inputNumber = fixture.nativeElement.querySelector('#number');
     const inputeDOB = fixture.nativeElement.querySelector('.dob');
    const inputEmail = fixture.nativeElement.querySelector('.email');
    const inputAddress = fixture.nativeElement.querySelector('#address');
    const submitBtn = fixture.nativeElement.querySelector('#submit');
    const cancelBtn = fixture.nativeElement.querySelector('#cancel');
    // Using custom expect matchers
    expect(inputFirstName).toBeVisible();
    expect(inputLastName).toBeVisible();
    expect(inputNumber).toBeVisible();
    expect(inputeDOB).toBeVisible();
    expect(inputEmail).toBeVisible();
    expect(inputAddress).toBeVisible();
    expect(submitBtn).toBeVisible();
    expect(cancelBtn).toBeVisible();
  });

  it('emailControl() should return user email', fakeAsync(() => {
    let email = 'test@gmail.com';
    component.myForm.controls['email'].setValue(email);
    let result = component.emailControl;
    expect(result.value).toEqual(email);
  }));
  it('onSubmit() should call add user method of user service', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(UserService);
    component.myForm.controls['firstName'].setValue('test');
    component.myForm.controls['lastName'].setValue('test');
    component.myForm.controls['dob'].setValue( new Date('09/09/2021'));
    component.myForm.controls['address'].setValue('test');
    component.myForm.controls['number'].setValue('7777777777');
    component.myForm.controls['email'].setValue('test@mail.com');
    let router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    let spy = spyOn(service, 'adduser').and.callFake(() => {
    });
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['user-data-entry-grid']);
  }));
  it('onCancel() should call it should navigate', fakeAsync(() => {
    let router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    component.onCancel();
    expect(navigateSpy).toHaveBeenCalledWith(['user-data-entry-grid']);
  }));
});
