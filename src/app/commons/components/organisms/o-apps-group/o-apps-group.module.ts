import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAppsGroupComponent } from './o-apps-group.component';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculesModule } from '../../molecules/molecules.module';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule
  ],
  exports:[OAppsGroupComponent],
  declarations: [OAppsGroupComponent]
})
export class OAppsGroupModule { }
