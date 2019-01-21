import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAppComponent } from './m-app.component';
import { AtomsModule } from '../../atoms/atoms.module';


@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports:[MAppComponent],
  declarations: [MAppComponent],
})
export class MAppModule { }
