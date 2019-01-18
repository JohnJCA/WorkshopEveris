import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { PharagraphComponent } from './atoms/pharagraph/pharagraph.component';
import { TittleComponent } from './atoms/tittle/tittle.component';
import { ButtonComponent } from './atoms/button/button.component';
import { ToolComponent } from './molecules/tool/tool.component';
import { LinkComponent } from './atoms/link/link.component';

import { IconComponent } from './atoms/icon/icon.component';
import { ItemComponent } from './molecules/item/item.component';
import { InputComponent } from './atoms/input/input.component';
import { FormsModule } from '@angular/forms';
import { SearchListComponent } from './organisms/search-list/search-list.component';
import { ToolsgroupComponent } from './organisms/tools-group/tools-group.component';
import { FilterPipe } from './commons/pipes/filter.pipe';
import { SuggestionsEndpoints } from './commons/endpoints/suggestion.endpoints';
import { ApplicationsGroupEndpoints } from './commons/endpoints/applications-group.endpoints';


@NgModule({
  declarations: [
    AppComponent,
    PharagraphComponent,
    TittleComponent,
    ButtonComponent,
    IconComponent,
    ToolComponent,
    ToolsgroupComponent,
    LinkComponent,
    ItemComponent,
    InputComponent,
    SearchListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SuggestionsEndpoints, ApplicationsGroupEndpoints],
  bootstrap: [AppComponent]
})
export class AppModule { }
