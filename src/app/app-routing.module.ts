import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tab1', pathMatch: 'full' },
  {
    path: 'tab1',
    component: Tab1Component,
    data: {
      label: 'Tab 1',
      link: '/tab1',
      index: 0
    }
  },
  {
    path: 'tab2',
    component: Tab2Component,
    data: {
      label: 'Tab 2',
      link: '/tab2',
      index: 1
    }
  },
  {
    path: 'tab3',
    component: Tab3Component,
    data: {
      label: 'Tab 3',
      link: '/tab3',
      index: 2
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
