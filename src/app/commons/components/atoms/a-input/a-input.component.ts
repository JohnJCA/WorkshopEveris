import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'a-input',
  templateUrl: './a-input.component.html',
  styleUrls: ['./a-input.component.scss'],
})
export class AInputComponent implements OnInit {

  @Input() public text: string = '';
  @Input() public placeholder: string = 'Placeholder';
  @Input() public organismClicked: boolean = false;
  @Input() public showList: boolean = false;
  
  @Output() public valueChange: EventEmitter<string> = new EventEmitter();
  @Output() public inputBlur: EventEmitter<boolean> = new EventEmitter();


  public focus: boolean = false;

  constructor() { }

  ngOnInit() {}
  
  getClassList() {
    return {
      [`input-container`]: true,
      [`focus`]: this.focus || this.showList || this.organismClicked
    }
  }

  onFocus(ev: Event){
    this.focus = true;
    this.inputBlur.emit(false);
    ev.stopPropagation();
  }

  onBlur(ev: Event){
    this.focus = false;
    this.inputBlur.emit(true);
    ev.stopPropagation();
  }
  onKey(ev: Event){
    this.inputBlur.emit(true);
    ev.stopPropagation();
  }

  textChangued(ev: any){
    this.text = ev.target.value;
    this.valueChange.emit(this.text)
  }

}
