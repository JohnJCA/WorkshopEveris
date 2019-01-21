import { Component, OnInit } from '@angular/core';
import { ApplicationsGroupEndpoints } from 'src/app/commons/endpoints/applications-group.endpoints';


@Component({
  selector: 'o-apps-group',
  templateUrl: './o-apps-group.component.html',
  styleUrls: ['./o-apps-group.component.scss'],
})
export class OAppsGroupComponent implements OnInit {

  public appsGroup;
  constructor(private applicationsGroupEndpoints: ApplicationsGroupEndpoints) { }

  ngOnInit() {
    this.applicationsGroupEndpoints.getApps().subscribe((response)=>{
      this.appsGroup = response;
    })
  }

}
