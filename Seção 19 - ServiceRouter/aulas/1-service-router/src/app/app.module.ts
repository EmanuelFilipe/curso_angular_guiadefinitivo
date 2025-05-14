import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './components/initial/initial.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InformationsComponent } from './components/informations/informations.component';
import { CardsComponent } from './components/cards/cards.component';
import { DebitComponent } from './components/cards/components/debit/debit.component';
import { CreditComponent } from './components/cards/components/credit/credit.component';
import { CardsRoutingModule } from './components/cards/cards.routes';
import { CardComponentComponent } from './components/cards/components/card-component/card-component.component';
import { CardComponent } from './components/cards/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    ContactsComponent,
    InformationsComponent,
    CardsComponent,
    DebitComponent,
    CreditComponent,
    CardComponentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    CardsRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
