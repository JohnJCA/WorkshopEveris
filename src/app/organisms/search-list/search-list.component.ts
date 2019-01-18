import { Component, OnInit, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { SuggestionsEndpoints } from '../../commons/endpoints/suggestion.endpoints';
import { FilterPipe } from '../../commons/pipes/filter.pipe';
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
  providers:[FilterPipe]
})
export class SearchListComponent implements OnInit {

  @Input() organismClicked: boolean = false;

  public items;
  public text: string = '';
  public inputBlured: boolean = false;
  public callBackend: boolean = true;
  public showList: boolean = false;
  
  constructor(private suggestionendpoints: SuggestionsEndpoints,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onValueChangued(ev: any){
    this.text = ev;
  }

  onClick(){
    if(this.callBackend){
      this.suggestionendpoints.getSuggestions().subscribe((result)=>{
        this.items = result;
      })
    }
      this.callBackend = false;
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("this.inputBlured",this.inputBlured);
    console.log("this.organismClicked",this.organismClicked);
    this.showList = (this.organismClicked && !this.inputBlured)? true : false;
  }

  onInputBlured(ev: boolean){
    console.log("this.inputBlured",this.inputBlured);
    this.inputBlured = ev;
    this.cd.detectChanges();
  }

  getItems(item: any){
    if(this.text.length != 0){
      return item.name.toLocaleUpperCase().indexOf(this.text.toUpperCase()) != -1 ? true: false;
    }else{
      return true;
    }
  }
  getSearch(){
    console.log("getSearch");
    let text = this.text.replace(' ', '+');
    return 'https://github.com/search?q='+text 
  }

}
