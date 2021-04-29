import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _title: string;

  constructor() {
    this._title = 'Petinder';
  }

  ngOnInit(): void {
  }

  get title(): string {
    return this._title;
  }

}
