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
  @Input() public onhover: boolean;
  @Input() public search: boolean = false;
  @Output() public itemClicked: EventEmitter<boolean> = new EventEmitter();

  public color: string = 'black';
  

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }
  mouseEnter(){
    this.onhover = true;
    this.color = 'white';
  }

  mouseLeave(){
    this.onhover = false;
    this.color = 'black';
  }

  clicked(){
    console.log(this.url)
    this.itemClicked.emit(true);
    window.open(this.url, '_blank');
  }
}
