import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-title',
  templateUrl: './a-title.component.html',
  styleUrls: ['./a-title.component.scss']
})
export class ATitleComponent implements OnInit {

  @Input() public text: string = 'Tittle'
  @Input() public type: string = 'menu';

  constructor() { }

  ngOnInit() {

  }

  getClassList() {
    return {
      [`${this.type}`]: true,
    }
  }

}
