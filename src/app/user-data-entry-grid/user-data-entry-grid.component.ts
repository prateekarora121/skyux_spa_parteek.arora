import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyModalCloseArgs, SkyModalService } from '@skyux/modals';
import { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { UserService } from '../services/user.service';
import { SkyDataEntryGridContextMenuComponent } from './data-entry-grid-context-menu.component';
import { SkyDataEntryGridEditModalContext } from './data-entry-grid-edit-modal-context';
import { SkyDataEntryGridEditModalComponent } from './data-entry-grid-edit-modal.component';

@Component({
  selector: 'user-data-entry-grid',
  templateUrl: './user-data-entry-grid.component.html'
})
export class SkyDataEntryGridDemoComponent implements OnInit {
  public gridData: any[];
  public display: boolean = true;
  public columnDefs = [
    {
      field: 'selected',
      type: SkyCellType.RowSelector
    },
    {
      colId: 'context',
      headerName: '',
      maxWidth: 50,
      sortable: false,
      cellRendererFramework: SkyDataEntryGridContextMenuComponent
    },
    {
      field: 'firstName',
      headerName: 'First Name'
    },
    {
      field: 'lastName',
      headerName: 'Last Name'
    },
    {
      field: 'number',
      headerName: 'Phone No.',
      type: SkyCellType.Number
    },
    {
      field: 'email',
      headerName: 'Email'
    },
    {
      field: 'dob',
      headerName: 'DOB',
      type: SkyCellType.Date
    },
    {
      field: 'address',
      headerName: 'Address'
    }
  ];

  public gridApi: GridApi;
  public gridOptions: GridOptions;
  public searchText: string;

  constructor(
    private agGridService: SkyAgGridService,
    private modalService: SkyModalService,
    private userService: UserService,
    private router: Router
  ) {
    this.userService.updatedUsers.subscribe((data) => {
      this.gridData = this.userService.getUsers();
      if (data) {
        this.display = false;
      }
      setTimeout((x) => {
        this.display = true;
      }, 0);
    });
  }

  public ngOnInit(): void {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: (gridReadyEvent) => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({
      gridOptions: this.gridOptions
    });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }

  public openModal(): void {
    const context = new SkyDataEntryGridEditModalContext();
    context.gridData = this.gridData;

    const options = {
      providers: [
        { provide: SkyDataEntryGridEditModalContext, useValue: context }
      ],
      ariaDescribedBy: 'docs-edit-grid-modal-content',
      size: 'large'
    };

    const modalInstance = this.modalService.open(
      SkyDataEntryGridEditModalComponent,
      options
    );

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      if (result.reason === 'cancel' || result.reason === 'close') {
        alert('Edits canceled!');
      } else {
        this.gridData = result.data;
        this.gridApi.refreshCells();
        alert('Saving data!');
      }
    });
  }

  public searchApplied(searchText: string): void {
    this.searchText = searchText;
    this.gridApi.setQuickFilter(searchText);
  }

  public onAddUser() {
    this.router.navigate(['user']);
  }
}
