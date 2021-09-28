import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {
  ICellRendererAngularComp
} from 'ag-grid-angular';

import {
  ICellRendererParams
} from 'ag-grid-community';
import { UserService } from '../services/user.service';

@Component({
  selector: 'data-entry-grid-context-menu',
  templateUrl: './data-entry-grid-context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyDataEntryGridContextMenuComponent implements ICellRendererAngularComp {
  // private name: string;
  private params: ICellRendererParams;


  constructor(private userService:UserService) {
  }
  public agInit(params: ICellRendererParams): void {
    this.params = params;
    // this.name = this.params.data && this.params.data.name;
  }

  public refresh(): boolean {
    return false;
  }

  public actionClicked(action:any): void {

    this.userService.removeUser(this.params.data.id);

    alert('User deleted Successfully');

    // alert(`${action} clicked for ${this.name}`);
  }
}
