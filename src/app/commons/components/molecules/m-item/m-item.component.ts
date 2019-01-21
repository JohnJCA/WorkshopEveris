import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'm-item',
  templateUrl: './m-item.component.html',
  styleUrls: ['./m-item.component.scss']
})
export class MItemComponent implements OnInit {

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

  enter(ev: Event){
    this.onhover = true;
    this.color = 'white';
    ev.preventDefault();
  }

  leave(ev: Event){
    this.onhover = false;
    this.color = 'black';
    ev.preventDefault();
  }

  clicked(ev: Event){
    this.itemClicked.emit(true);
    window.open(this.url, '_blank');
    ev.preventDefault();
  }

  onButtonClicked(){
    this.itemClicked.emit(true);
    window.open(this.url, '_blank');
  }
}
