import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() public path: string = ''
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
