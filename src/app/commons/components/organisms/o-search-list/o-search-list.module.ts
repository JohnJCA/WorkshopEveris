import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSearchListComponent } from './o-search-list.component';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculesModule } from '../../molecules/molecules.module';
import { MainPipe } from 'src/app/commons/pipes/pipes.module';
import { FilterPipe } from 'src/app/commons/pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    MainPipe
  ],
  providers:[FilterPipe],
  exports:[OSearchListComponent],
  declarations: [OSearchListComponent],
})
export class OSearchListModule { }
