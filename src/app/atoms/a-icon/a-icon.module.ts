import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIconComponent } from './a-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[AIconComponent],
  declarations: [AIconComponent]
})
export class AIconModule { }
