import { routes } from './app-routing.module';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
class StoredData {
  FRoute: Route;
  FLabel: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public storedData: StoredData[] = [];

  constructor() {}

  ngOnInit() {
    let sd: StoredData;
    let s: string;

    routes.forEach(theRoute => {
      if (theRoute.data) {
        s = theRoute.data['label'];
        sd = { FRoute: theRoute, FLabel: s };
        this.storedData.push(sd);
      }
    });
  }
}
