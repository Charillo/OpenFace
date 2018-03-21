import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from "environments/environment";
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  ListHistoryOnTable: any[];
  ListHistory: string[];
  Date = new Date();

  maxDateValue: Date = undefined;
  cellTemplate: string;

  constructor(public http: Http) {
    this.ListHistoryOnTable = [];

    this.maxDateValue = new Date(this.Date.getTime() + 1000 * 60 * 60);
    this.http.get(environment.UrlLocalHost + "GetHistory").subscribe(
      res => {
        this.ListHistory = res.json();
        this.ListHistory.forEach((element, index) => {
         
          if (new Date().getDate() + new Date().getMonth() + new Date().getFullYear() == new Date(this.ListHistory[index]['his_date']).getDate() + new Date(this.ListHistory[index]['his_date']).getMonth() + new Date(this.ListHistory[index]['his_date']).getFullYear()) {
            this.ListHistoryOnTable[index] = {
              His_id: this.ListHistory[index]['his_id'],
              His_date: new Date(this.ListHistory[index]['his_date']),
              His_em_id: this.ListHistory[index]['his_em_id'],
              His_name: this.ListHistory[index]['his_name'],
              His_time: this.ListHistory[index]['his_date']
            }
            console.log(this.ListHistoryOnTable[index]);
          }
        });

      });

  }

  ngOnInit() {





  }
  Search(e) {
    this.ListHistoryOnTable = [];
    this.ListHistory.forEach((element, index) => {
      if (e.value.getDate() + e.value.getMonth() + e.value.getFullYear() == new Date(this.ListHistory[index]['his_date']).getDate() + new Date(this.ListHistory[index]['his_date']).getMonth() + new Date(this.ListHistory[index]['his_date']).getFullYear()) {
        this.ListHistoryOnTable[index] = {
          His_id: this.ListHistory[index]['his_id'],
          His_date: new Date(this.ListHistory[index]['his_date']),
          His_em_id: this.ListHistory[index]['his_em_id'],
          His_name: this.ListHistory[index]['his_name'],
          His_time: this.ListHistory[index]['his_date']
        }
      }
    });
  }


}