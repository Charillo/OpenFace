import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  link(type){
      if(type == 'Member') { this.router.navigate(['/member']); }
      else if(type == 'RealTime'){ this.router.navigate(['/RealTime']); }
  }

}
