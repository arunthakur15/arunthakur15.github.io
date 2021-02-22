import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mari Deal Ltd';
  currency = "MUR";
  urlParams = new URLSearchParams(window.location.search);
  status = "false";
  constructor(){
  }

  ngOnInit(): void {
    this.status = this.urlParams.get('paymentStatus');
    console.log(this.status);
    //alert(status);
  }
}
