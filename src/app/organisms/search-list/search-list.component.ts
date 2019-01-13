import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  public items = [
    'typicode/json-server',
    'angular/angular',
    'npm/npm',
    'facebook/react',
    'ionic-team/stencil',
    'reactphp/react',
    'Polymer/polymer',
  ];
  public text: string = '';
  public focus: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onValueChangued(ev: any){
    this.text = ev;
  }


/*   mouseEnter(){
    this.listHover = true;
  }

  mouseLeave(){
    this.listHover = false;
  } */

  getItems(item: string){
    if(this.text.length != 0){
      return item.toLocaleUpperCase().indexOf(this.text.toUpperCase()) != -1 ? true: false;
    }else{
      return true;
    }
  }
  getSearch(){
    let url = 'https://github.com/search?q='
    let text = this.text.replace(' ', '+');
    return url+text 
  }

}
