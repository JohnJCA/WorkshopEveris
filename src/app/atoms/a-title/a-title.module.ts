import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ATitleComponent } from './a-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ATitleComponent],
  declarations: [ATitleComponent]
})
export class ATitleModule { }
