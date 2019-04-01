import { routes } from './app-routing.module';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeLinkIndex = -1;
  storedRoutes: Route[] = [];

  constructor(public router: Router) {}

  ngOnInit() {
    this.router.config.forEach(route => {
      this.storedRoutes.push(route);
    });
  }
}
