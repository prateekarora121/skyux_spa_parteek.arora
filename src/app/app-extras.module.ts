import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppSkyModule } from './app-sky.module';

@NgModule({
  exports: [AppSkyModule, AgGridModule],
  imports: [AgGridModule.withComponents([])]
})
export class AppExtrasModule {}
