import { Component, OnInit, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { SuggestionsEndpoints } from 'src/app/commons/endpoints/suggestion.endpoints';
import { FilterPipe } from 'src/app/commons/pipes/filter.pipe';

@Component({
  selector: 'o-search-list',
  templateUrl: './o-search-list.component.html',
  styleUrls: ['./o-search-list.component.scss'],
})
export class OSearchListComponent implements OnInit {

  @Input() organismClicked: boolean = false;

  public items;
  public text: string = '';
  public inputBlured: boolean = false;
  public callBackend: boolean = true;
  public showList: boolean = false;
  
  constructor(private suggestionendpoints: SuggestionsEndpoints,
    private filterPipe: FilterPipe,
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
    this.showList = (this.organismClicked && !this.inputBlured)? true : false;
  }

  onInputBlured(ev: boolean){
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
    let text = this.text.replace(' ', '+');
    return 'https://github.com/search?q='+text 
  }

}
