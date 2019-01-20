import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 

import { ToolComponent } from './molecules/tool/tool.component';
import { ItemComponent } from './molecules/item/item.component';
import { FormsModule } from '@angular/forms';
import { SearchListComponent } from './organisms/search-list/search-list.component';
import { ToolsgroupComponent } from './organisms/tools-group/tools-group.component';
import { FilterPipe } from './commons/pipes/filter.pipe';
import { SuggestionsEndpoints } from './commons/endpoints/suggestion.endpoints';
import { ApplicationsGroupEndpoints } from './commons/endpoints/applications-group.endpoints';
import { AtomsModule } from './atoms/atoms.module';






@NgModule({
  declarations: [
    AppComponent,
    ToolComponent,
    ToolsgroupComponent,
    ItemComponent,
    SearchListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AtomsModule
  ],
  providers: [SuggestionsEndpoints, ApplicationsGroupEndpoints],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
