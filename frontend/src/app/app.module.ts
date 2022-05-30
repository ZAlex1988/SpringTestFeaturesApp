import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPageComponent } from './Components/list-page/list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
