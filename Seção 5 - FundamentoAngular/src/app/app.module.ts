import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StatusClassPipe } from './pipes/status-class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    //StatusClassPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StatusClassPipe
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
