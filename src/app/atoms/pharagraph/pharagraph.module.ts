import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharagraphComponent } from './pharagraph.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[PharagraphComponent],
  declarations: [PharagraphComponent]
})
export class ParagraphModule { }
