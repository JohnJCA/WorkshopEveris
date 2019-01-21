import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-app',
  templateUrl: './m-app.component.html',
  styleUrls: ['./m-app.component.scss']
})
export class MAppComponent implements OnInit {
  
  @Input() public tittle: string = 'Default';
  @Input() public description: string = 'Default';
  @Input() public image: string = 'Default';

  constructor() { }

  ngOnInit() {
  }

}
