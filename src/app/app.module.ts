import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { PharagraphComponent } from './atoms/pharagraph/pharagraph.component';
import { TittleComponent } from './atoms/tittle/tittle.component';
import { ButtonComponent } from './atoms/button/button.component';
import { ToolComponent } from './molecules/tool/tool.component';
import { LinkComponent } from './atoms/link/link.component';
import { ResultsEndpoints } from './endpoints/results.endpoints';
import { IconComponent } from './atoms/icon/icon.component';
import { ItemComponent } from './molecules/item/item.component';
import { InputComponent } from './atoms/input/input.component';
import { FormsModule } from '@angular/forms';
import { SearchListComponent } from './organisms/search-list/search-list.component';
import { ToolsgroupComponent } from './organisms/tools-group/tools-group.component';

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
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ResultsEndpoints],
  bootstrap: [AppComponent]
})
export class AppModule { }
