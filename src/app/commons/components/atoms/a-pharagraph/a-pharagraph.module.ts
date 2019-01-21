import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APharagraphComponent } from './a-pharagraph.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[APharagraphComponent],
  declarations: [APharagraphComponent]
})
export class APharagraphModule { }
