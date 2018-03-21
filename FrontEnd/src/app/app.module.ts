import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, RequestOptions, XHRBackend, Http } from '@angular/http';
import { CommonModule } from '@angular/common'
import { LocalStorageModule } from 'angular-2-local-storage';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
//import { NgxDatatableModule } from '../datatable.module';
//import { NgxDatatableModule }  from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
//import { MaterialModule } from '@angular/material';
import { MatInputModule} from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SelectModule } from 'ng2-select';
import { DxDataGridModule,
         DxTextBoxModule,
         DxTagBoxModule,
         DxSlideOutModule,
         DxToolbarModule,
         DxSwitchModule,
         DxTemplateModule,
         DxButtonModule,
         DxMultiViewModule,
         DxNumberBoxModule,
         DxDateBoxModule,
         DxFormModule,
         DxTreeListModule,
         DxPopupModule,
         DxValidatorModule,
         DxTooltipModule,
         DxCheckBoxModule} from 'devextreme-angular';

import {
  
  MatTabsModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTableModule,
  MatProgressSpinnerModule,
  

} 
from '@angular/material';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ChartsModule } from 'ng2-charts';
import { Ng2PaginationModule } from 'ng2-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutes } from './app.routing';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { AuthGuard } from '../_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { RealTimeComponent } from './real-time/real-time.component';
import { HistoryComponent } from './history/history.component';



@NgModule({
  
  declarations: [
    AppComponent,
    TabGroupComponent,
    HomeComponent,
    MemberComponent,
    RealTimeComponent,
    HistoryComponent

  ],
  imports: [
    BrowserModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    DxDataGridModule,
    DxButtonModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    Ng2PaginationModule,
    PaginationModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatTabsModule,
    MatGridListModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ChartsModule,
    Ng2TableModule,
    FlexLayoutModule,
    MatInputModule,
    //NgxDatatableModule,
    SelectModule,
    DxTextBoxModule,
    DxTagBoxModule,
    MatInputModule,
    DxSlideOutModule,
    DxToolbarModule,
    DxSwitchModule,
    DxTemplateModule,
    DxMultiViewModule,
    DxNumberBoxModule,
    DxDateBoxModule,
    DxFormModule,
    DxTreeListModule,
    DxValidatorModule,
    DxPopupModule,
    DxTooltipModule,
    DxCheckBoxModule,
   // MaterialModule,
    RouterModule.forRoot(AppRoutes,{useHash: true})
  ],
  providers: [ AuthGuard],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
