import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {	RouterModule	} from '@angular/router';

import { AppComponent } from './app.component';
import {LoginComponent} from './login.component'
import {	DashboardComponent	} from './dashboard.component';

import {	AppRoutingModule	} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
	DashboardComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
