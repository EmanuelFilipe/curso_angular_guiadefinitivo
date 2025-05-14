import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserInfosComponent } from './components/user-infos/user-infos.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { AsyncPipe } from '@angular/common';
import { loadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserInfosComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AsyncPipe
  ],
  providers: [provideHttpClient(
    withInterceptors([authInterceptor, loadingInterceptor])
  )],
  bootstrap: [AppComponent]
})
export class AppModule { }
