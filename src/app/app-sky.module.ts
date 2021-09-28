import { CommonModule } from '@angular/common';
import {
  NgModule
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  ReactiveFormsModule
} from '@angular/forms';

import {
  SkyDatepickerModule
} from '@skyux/datetime';
import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyCardModule,
  SkyFluidGridModule,
  SkyToolbarModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkyIdModule
} from '@skyux/core';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyAgGridModule } from '@skyux/ag-grid';
import { SkyModalModule } from '@skyux/modals';
import {
  SkySearchModule
} from '@skyux/lookup';
import { SkyDataEntryGridContextMenuComponent } from './user-data-entry-grid/data-entry-grid-context-menu.component';
import { SkyDataEntryGridEditModalComponent } from './user-data-entry-grid/data-entry-grid-edit-modal.component';

@NgModule({
  declarations:[
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyCardModule,
    SkyDatepickerModule,
    SkyIdModule,
    SkyInputBoxModule,
    SkyDropdownModule,
    SkyAgGridModule,
    SkyFluidGridModule,
    SkyModalModule,
    SkyToolbarModule,
    SkySearchModule
  ],
  entryComponents: [
    SkyDataEntryGridContextMenuComponent,
    SkyDataEntryGridEditModalComponent
  ]
})
export class AppSkyModule { }
