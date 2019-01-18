import { Component, OnInit, Input } from '@angular/core';
import {  ApplicationsGroupEndpoints } from '../../commons/endpoints/applications-group.endpoints';

@Component({
  selector: 'app-tools-group',
  templateUrl: './tools-group.component.html',
  styleUrls: ['./tools-group.component.scss'],
})
export class ToolsgroupComponent implements OnInit {

  public appsGroup;
  constructor(private applicationsGroupEndpoints: ApplicationsGroupEndpoints) { }

  ngOnInit() {
    this.applicationsGroupEndpoints.getApps().subscribe((response)=>{
      this.appsGroup = response;
    })
  }

}
