import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
import { SkyDataEntryGridDemoComponent } from './user-data-entry-grid.component';

describe('User Data Entry Grid component', () => {
  let component: SkyDataEntryGridDemoComponent;
  let fixture: ComponentFixture<SkyDataEntryGridDemoComponent>;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
      // providers:[SkyDataEntryGridEditModalComponent, SkyDataEntryGridEditModalContext, SkyModalInstance,
      //   SkyModalHostService, SkyModalConfiguration]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(SkyDataEntryGridDemoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show add user button', () => {
    const addBtn = fixture.nativeElement.querySelector('#add-btn');
    const editBtn = fixture.nativeElement.querySelector('#edit-btn');
     // Using custom expect matchers
     expect(addBtn).toBeVisible();
     expect(editBtn).toBeVisible();
  });
  it('grid should ready', fakeAsync(() => {
    component.gridOptions = {
      columnDefs: component.columnDefs,
      onGridReady: (gridReadyEvent) => component.onGridReady(gridReadyEvent)
    };
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.gridApi).not.toBeNull();
    });
  }));
  it('searchApplied () should call setQuickFilter ', fakeAsync(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let spy = spyOn(component.gridApi, 'setQuickFilter');
      component.searchApplied('Test');
      expect(spy).toHaveBeenCalledWith(['user']);
    });
  })
  );
  it('onAddUser() should call it should navigate', fakeAsync(() => {
    const navigateSpy = spyOn(router, 'navigate');
    component.onAddUser();
    expect(navigateSpy).toHaveBeenCalledWith(['user']);
  }));
  it('should show modal', () => {
    component.openModal();
    const modal = fixture.nativeElement.offsetParent.className;
    expect(modal).toEqual('sky-modal-body-open');
  });

  // it('should show modal', () => {
  //   let fix = TestBed.createComponent(SkyDataEntryGridEditModalComponent);
  //   let ele=fix.nativeElement.querySelector('.savebtn');
  //   debugger
  // });
  it('should set gridoptions on calling  ngOnInit', () => {
    component.ngOnInit();
    expect(component.gridOptions).not.toBeNull();
  });
});
