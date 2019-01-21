import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-icon',
  templateUrl: './a-icon.component.html',
  styleUrls: ['./a-icon.component.scss']
})
export class AIconComponent implements OnInit {

  @Input() public path: string = 'assets/img/github-icon.png'
  @Input() public type = "radius"
  
  constructor() { }

  ngOnInit() {
  }

  getClassList() {
    return {
      [`${this.type}`]: true,
    }
  }
  
}
