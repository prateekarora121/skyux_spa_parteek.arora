import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
import { SkyModalConfiguration, SkyModalHostService, SkyModalInstance } from '@skyux/modals';
import { SkyDataEntryGridEditModalContext } from '../data-entry-grid-edit-modal-context/data-entry-grid-edit-modal-context';
import { SkyDataEntryGridEditModalComponent } from './data-entry-grid-edit-modal.component';
describe('Data Entry Grid Edit Modal', () => {
  let component: SkyDataEntryGridEditModalComponent;
  let fixture: ComponentFixture<SkyDataEntryGridEditModalComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule],
      providers: [SkyDataEntryGridEditModalContext, SkyModalInstance, SkyModalHostService, SkyModalConfiguration]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(SkyDataEntryGridEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
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
  it('should call ngOnInit', () => {
    component.ngOnInit();
    expect(component.columnDefs).not.toBeNull();
  });
});
