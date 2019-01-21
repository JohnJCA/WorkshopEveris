import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AButtonComponent } from './a-button.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[AButtonComponent],
  declarations: [AButtonComponent]
})
export class AButtonModule { }
