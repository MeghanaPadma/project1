import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClistComponent } from './customerlist/clist.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';
import { ExampleDirective } from './example.directive';
import { NavComponent } from './nav/nav.component'
@NgModule({
  declarations: [
    AppComponent,
    ClistComponent,
    ChildComponent,
    ExampleDirective,
    NavComponent
  ],//different services and components
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],//external modules to be used
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
