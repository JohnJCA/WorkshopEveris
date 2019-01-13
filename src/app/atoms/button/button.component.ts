import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
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
