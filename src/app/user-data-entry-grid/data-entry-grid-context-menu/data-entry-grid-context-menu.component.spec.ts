import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import {
  expect
} from '@skyux-sdk/testing';
import { ICellRendererParams } from 'ag-grid-community';
import { UserService } from '../../shared/services/user.service';
import { SkyDataEntryGridContextMenuComponent } from './data-entry-grid-context-menu.component';
describe('Data Entry Grid context menu component', () => {
  let component: SkyDataEntryGridContextMenuComponent;
  let fixture: ComponentFixture<SkyDataEntryGridContextMenuComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(SkyDataEntryGridContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return false', () => {
    let result = component.refresh();
    expect(result).not.toBeTruthy();
  });

  it('should call removeUser method ', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(UserService);
    let spy = spyOn(service, 'removeUser');
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component.actionClicked(1);
    expect(spy).toHaveBeenCalled();
    });
  }));
  it('should call aginit', () => {
    let params: ICellRendererParams;
     component.agInit(params);
    expect(component.params).not.toBeNull();
  });
});
