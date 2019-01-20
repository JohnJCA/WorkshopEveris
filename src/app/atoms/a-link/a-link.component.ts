import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-link',
  templateUrl: './a-link.component.html',
  styleUrls: ['./a-link.component.scss']
})
export class ALinkComponent implements OnInit {
  @Input() public text: string = 'Ver todo';
  @Input() public url: string = 'Ver todo';
  constructor() { }

  ngOnInit() {
  }

}
