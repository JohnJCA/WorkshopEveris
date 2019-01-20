import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'a-button',
  templateUrl: './a-button.component.html',
  styleUrls: ['./a-button.component.scss']
})
export class AButtonComponent implements OnInit {
  
  @Input() public text = "Button"
  @Input() public type = "little"

  @Output() public buttonClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getClassList() {
    return {
      [`${this.type}`]: true,
    }
  }

  emitClick(ev: Event){
    this.buttonClicked.emit();
    ev.stopPropagation();
  }
  
}
