import { Component, OnInit } from '@angular/core';
import { SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyModalInstance } from '@skyux/modals';
import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent
} from 'ag-grid-community';
import { UserModel } from '../model/user.model';
import { SkyDataEntryGridEditModalContext } from './data-entry-grid-edit-modal-context';

@Component({
  selector: 'sky-demo-edit-modal-form',
  templateUrl: './data-entry-grid-edit-modal.component.html'
})
export class SkyDataEntryGridEditModalComponent implements OnInit {
  public columnDefs: ColDef[];
  public gridApi: GridApi;
  public gridData: UserModel[];
  public gridOptions: GridOptions;

  constructor(
    private agGridService: SkyAgGridService,
    public context: SkyDataEntryGridEditModalContext,
    public instance: SkyModalInstance
  ) {}

  public ngOnInit(): void {
    this.gridData = this.context.gridData;
    this.columnDefs = [
      {
        field: 'firstName',
        headerName: 'First Name',
        editable: true
      },
      {
        field: 'lastName',
        headerName: 'Last Name',
        editable: true
      },
      {
        field: 'number',
        headerName: 'Phone No.',
        editable: true
      },
      {
        field: 'email',
        headerName: 'Email',
        editable: true
      },
      {
        field: 'dob',
        headerName: 'DOB',
        type: SkyCellType.Date,
        editable: true
      },
      {
        field: 'address',
        headerName: 'Address',
        editable: true
      }
    ];

    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: (gridReadyEvent) => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getEditableGridOptions({
      gridOptions: this.gridOptions
    });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }
}
