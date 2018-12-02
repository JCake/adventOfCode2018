import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day2Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
