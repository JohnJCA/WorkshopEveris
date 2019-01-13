import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TittleComponent } from './tittle.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports:[TittleComponent],
  declarations: [TittleComponent]
})
export class TittleModule { }
