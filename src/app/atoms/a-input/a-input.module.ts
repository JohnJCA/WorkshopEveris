import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AInputComponent } from './a-input.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule
    ],
    exports:[AInputComponent],
    declarations: [AInputComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class AInputModule { }
  