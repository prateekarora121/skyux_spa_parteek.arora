import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyAgGridModule } from '@skyux/ag-grid';
import { SkyAvatarModule } from '@skyux/avatar';
import { SkyIdModule } from '@skyux/core';
import { SkyDatepickerModule } from '@skyux/datetime';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyAlertModule, SkyKeyInfoModule } from '@skyux/indicators';
import {
  SkyCardModule,
  SkyFluidGridModule,
  SkyToolbarModule
} from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';
import { SkyModalModule } from '@skyux/modals';
import { SkyNavbarModule } from '@skyux/navbar';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyDataEntryGridContextMenuComponent } from './user-data-entry-grid/data-entry-grid-context-menu/data-entry-grid-context-menu.component';
import { SkyDataEntryGridEditModalComponent } from './user-data-entry-grid/data-entry-grid-edit-modal/data-entry-grid-edit-modal.component';

@NgModule({
  declarations: [],
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
export class AppSkyModule {}
