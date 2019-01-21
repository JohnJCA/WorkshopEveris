import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APharagraphModule } from './a-pharagraph/a-pharagraph.module';
import { ALinkModule } from './a-link/a-link.module';
import { AInputModule } from './a-input/a-input.module';
import { AIconModule } from './a-icon/a-icon.module';
import { AButtonModule } from './a-button/a-button.module';
import { ATitleModule } from './a-title/a-title.module';


@NgModule({
  imports: [
    CommonModule,
    AIconModule,
    ATitleModule,
    APharagraphModule,
    ALinkModule,
    AInputModule,
    AButtonModule 
  ],
  exports:[    
    AIconModule,
    ATitleModule,
    APharagraphModule,
    ALinkModule,
    AInputModule,
    AButtonModule 
  ]
})
export class AtomsModule { }
