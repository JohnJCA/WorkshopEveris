import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.scss']
})
export class TittleComponent implements OnInit {

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
