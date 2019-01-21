import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-pharagraph',
  templateUrl: './a-pharagraph.component.html',
  styleUrls: ['./a-pharagraph.component.scss']
})
export class APharagraphComponent implements OnInit {

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
