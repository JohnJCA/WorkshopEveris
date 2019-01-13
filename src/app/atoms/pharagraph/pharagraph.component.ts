import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pharagraph',
  templateUrl: './pharagraph.component.html',
  styleUrls: ['./pharagraph.component.scss']
})
export class PharagraphComponent implements OnInit {

  @Input() public text: string = 'Tittle'
  @Input() public type: string = 'menu';
  @Input() public color: string = 'bold';


  constructor() { }

  ngOnInit() {

  }
  getClassList() {
    return {
      [`${this.type}`]: true,
      [`${this.color}`]: true,
    }
  }
}
