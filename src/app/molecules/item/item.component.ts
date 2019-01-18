import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public text: string = '';
  @Input() public url: string = '';
  @Input() public buttonText: string = 'Jump to';
  @Input() public search: boolean = false;
  public onhover: boolean;
  @Output() public itemClicked: EventEmitter<boolean> = new EventEmitter();

  public color: string = 'black';
  

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  enter(){
    this.onhover = true;
    this.color = 'white';
  }

  leave(){
    this.onhover = false;
    this.color = 'black';
  }

  clicked(ev: Event){
    this.itemClicked.emit(true);
    window.open(this.url, '_blank');
    ev.stopPropagation();
  }

  onButtonClicked(){
    this.itemClicked.emit(true);
    window.open(this.url, '_blank');
  }
}
