import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { environment } from "environments/environment.prod";
import { HttpModule, Response, Http, RequestOptions, Headers } from '@angular/http'
import { GetDataService } from '../getDataService';

// import { DxSlideOutModule, DxToolbarModule, DxSwitchModule, DxTemplateModule } from 'devextreme-angular';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
  providers: [GetDataService]
})
export class TabGroupComponent implements OnInit {
  
  constructor(public getDataService: GetDataService, private localStorageService: LocalStorageService, private router: Router, public http: Http) {
   
  
  }
  ngOnInit() {
   
  }
  ClickTab(type: string, tabname: any) {

   

  }
 

  
}
