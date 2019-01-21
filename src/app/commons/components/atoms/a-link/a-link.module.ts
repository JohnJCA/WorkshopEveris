import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ALinkComponent } from './a-link.component';


@NgModule({
    imports: [
      CommonModule,
      FormsModule
    ],
    exports:[ALinkComponent],
    declarations: [ALinkComponent]
  })
  export class ALinkModule { }
  