import {
  Component,
  OnInit
} from '@angular/core';

import {
  GridApi,
  GridReadyEvent,
  GridOptions,
  // ValueFormatterParams
} from 'ag-grid-community';

import {
  SkyCellType,
  SkyAgGridService
} from '@skyux/ag-grid';

import {
  SkyModalService,
  SkyModalCloseArgs
} from '@skyux/modals';

import {
  SkyDataEntryGridEditModalContext
} from './data-entry-grid-edit-modal-context';

import {
  SkyDataEntryGridEditModalComponent
} from './data-entry-grid-edit-modal.component';

import {
  SkyDataEntryGridContextMenuComponent
} from './data-entry-grid-context-menu.component';


import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-data-entry-grid',
  templateUrl: './user-data-entry-grid.component.html'
})
export class SkyDataEntryGridDemoComponent implements OnInit {
   gridData:any[];
   public display:boolean=true;
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
      type: SkyCellType.Number,

    },
    // {
    //   field: 'startDate',
    //   headerName: 'Start Date',
    //   type: SkyCellType.Date,
    //   sort: 'asc'
    // },
    // {
    //   field: 'endDate',
    //   headerName: 'End Date',
    //   type: SkyCellType.Date,
    //   valueFormatter: this.endDateFormatter
    // },
    {
      field: 'email',
      headerName: 'Email',
      // type: SkyCellType.Autocomplete
    },
    {
      field: 'dob',
      headerName: 'DOB',
      type: SkyCellType.Date,
      // cellRendererParams: {
      //   skyComponentProperties: {
      //     validator: (value: Date) => !!value && value >= new Date(),
      //     validatorMessage: 'Please enter a Past date'
      //   }
      // }
    },
    {
      field: 'address',
      headerName: 'Address',
      // type: SkyCellType.Autocomplete
    }
    // {
    //   colId: 'validationCurrency',
    //   field: 'validationCurrency',
    //   type: [SkyCellType.CurrencyValidator]
    // },

  ];

  public gridApi: GridApi;
  public gridOptions: GridOptions;
  public searchText: string;

  constructor(
    private agGridService: SkyAgGridService,
    private modalService: SkyModalService,
    private userService:UserService,
    private router:Router
  ) {

    this.userService.updatedUsers.subscribe(
      data=>{
        this.gridData=this.userService.getUsers();
        if(data)
        {
        this.display=false;
        }
        setTimeout(x=>{
          this.display=true;
        },0)

      }
    )
  }

  public ngOnInit(): void {

    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }

  public openModal(): void {
    const context = new SkyDataEntryGridEditModalContext();
    context.gridData = this.gridData;

    const options = {
      providers: [{ provide: SkyDataEntryGridEditModalContext, useValue: context }],
      ariaDescribedBy: 'docs-edit-grid-modal-content',
      size: 'large'
    };

    const modalInstance = this.modalService.open(SkyDataEntryGridEditModalComponent, options);

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

  public onAddUser()
  {
  this.router.navigate(['user']);
  }
  // private endDateFormatter(params: ValueFormatterParams): string {
  //   const dateConfig = { year: 'numeric', month: '2-digit', day: '2-digit' };
  //   return params.value ? params.value.toLocaleDateString('en-us', dateConfig) : 'N/A';
  // }
}
