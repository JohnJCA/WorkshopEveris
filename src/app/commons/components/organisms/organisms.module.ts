import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAppsGroupModule } from './o-apps-group/o-apps-group.module';
import { OSearchListModule } from './o-search-list/o-search-list.module';

@NgModule({
  imports: [
    CommonModule,
    OAppsGroupModule,
    OSearchListModule

  ],
  exports:[
    OAppsGroupModule,
    OSearchListModule
 ],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OrganismsModule { }
