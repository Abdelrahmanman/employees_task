import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { Section1Component } from './components/section1/section1.component';


@NgModule({
  declarations: [HomeComponent, Section1Component],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
