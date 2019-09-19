import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: Object;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    console.log('this._http')
    console.log(this._http)
    this._http.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
 );
  }

}