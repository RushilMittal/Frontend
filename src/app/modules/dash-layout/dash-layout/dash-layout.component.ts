import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dash-layout',
  templateUrl: './dash-layout.component.html',
  styleUrls: ['./dash-layout.component.css']
})
export class DashLayoutComponent implements OnInit {

  toShow: boolean = false;
  ngOnInit() {

  }

  toggle() {
    this.toShow =!this.toShow;
    console.log("Show " + this.toShow);
  }

}
