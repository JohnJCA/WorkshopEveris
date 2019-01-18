import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tools-group',
  templateUrl: './tools-group.component.html',
  styleUrls: ['./tools-group.component.scss'],
})
export class ToolsgroupComponent implements OnInit {

  @Input() public arr = Array(4);
  constructor() { }

  ngOnInit() {
  }

}
