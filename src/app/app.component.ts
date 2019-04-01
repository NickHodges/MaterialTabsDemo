import { routes } from './app-routing.module';
import { Component, OnInit } from '@angular/core';
import { Data, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeLinkIndex = -1;
  FData: Data;
  storedRoutes: Route[];

  constructor() {}

  ngOnInit() {
    routes.forEach(route => {
      this.storedRoutes.push(route);
    });
  }
}
