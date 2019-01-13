import { Component, OnInit } from '@angular/core';
import { ResultsEndpoints } from '../../endpoints/results.endpoints';

@Component({
  selector: 'app-tools-group',
  templateUrl: './tools-group.component.html',
  styleUrls: ['./tools-group.component.scss'],
  providers: [ResultsEndpoints]
})
export class ToolsgroupComponent implements OnInit {

  public arr = [1,1,1]
  constructor( private resultendpoints: ResultsEndpoints) { }

  ngOnInit() {
    this.resultendpoints.getResults().subscribe((result)=>{
      console.log(result)
    })
  }

}
