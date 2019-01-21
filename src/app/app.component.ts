import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  organismClicked: boolean = false;

  appClicked(ev: any){
      let arrayOfElementsTag = ev.path.map((ele)=>ele.tagName)
      arrayOfElementsTag.indexOf("O-SEARCH-LIST") != -1 ? this.organismClicked = true:  this.organismClicked = false;
  }

}
