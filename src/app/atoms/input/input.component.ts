import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() public text: string = '';
  @Input() public placeholder: string = 'Placeholder';

  @Output() public valueChange: EventEmitter<string> = new EventEmitter();

  public focus: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  getClassList() {
    return {
      [`input-container`]: true,
      [`focus`]: this.focus,
    }
  }

  onFocus(){
    this.focus = true;
  }

  onBlur(){
    this.focus = false;
  }

  textChangued(ev:any){
    this.text = ev.target.value;
    this.valueChange.emit(this.text)
  }

}
