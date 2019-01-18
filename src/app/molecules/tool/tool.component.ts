import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  
  @Input() public tittle: string = 'Default';
  @Input() public description: string = 'Default';
  @Input() public image: string = 'Default';

  constructor() { }

  ngOnInit() {
  }

}
