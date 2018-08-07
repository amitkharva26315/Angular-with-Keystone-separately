import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoService } from './demo.service';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
