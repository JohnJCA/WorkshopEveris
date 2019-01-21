import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { SuggestionsEndpoints } from './commons/endpoints/suggestion.endpoints';
import { ApplicationsGroupEndpoints } from './commons/endpoints/applications-group.endpoints';
import { FormsModule } from '@angular/forms';
import { AtomsModule } from './commons/components/atoms/atoms.module';
import { MoleculesModule } from './commons/components/molecules/molecules.module';
import { OrganismsModule } from './commons/components/organisms/organisms.module';
import { FilterPipe } from './commons/pipes/filter.pipe';
import { MainPipe } from './commons/pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    MainPipe
  ],
  providers: [SuggestionsEndpoints, ApplicationsGroupEndpoints],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
