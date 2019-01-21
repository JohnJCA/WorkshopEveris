import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAppModule } from './m-app/m-app.module';
import { MItemModule } from './m-item/m-item.module';

@NgModule({
  imports: [
    CommonModule,
    MAppModule,
    MItemModule
  ],
  exports:[
      MAppModule,
      MItemModule
 ],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MoleculesModule { }
