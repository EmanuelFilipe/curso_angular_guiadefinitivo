import { ConfigService } from './services/config.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentsComponent } from './component/payments/payments.component';
import { NotAuthorizedComponent } from './component/not-authorized/not-authorized.component';
import { LoginComponent } from './component/login/login.component';
import { GeneralComponent } from './component/general/general.component';
import { DebitComponent } from './component/debit/debit.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreditComponent } from './component/credit/credit.component';
import { AdminComponent } from './component/admin/admin.component';
import { AuthService } from './services/auth.service';
import { TesteAuthComponent } from './component/teste-auth/teste-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { ContactsComponent } from './component/contacts/contacts.component';

export function initializeApp(configService: ConfigService): () => Promise<void> {
  console.log('app.module')
  return () => configService.loadConfigFile()
}
@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    NotAuthorizedComponent,
    LoginComponent,
    GeneralComponent,
    DebitComponent,
    DashboardComponent,
    CreditComponent,
    AdminComponent,
    TesteAuthComponent,
    ContactsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AsyncPipe
  ],
  providers: [
    AuthService,
    ConfigService, {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
