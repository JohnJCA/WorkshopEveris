import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MItemComponent } from './m-item.component';
import { AtomsModule } from '../../atoms/atoms.module';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports:[MItemComponent],
  declarations: [MItemComponent]
})
export class MItemModule { }
