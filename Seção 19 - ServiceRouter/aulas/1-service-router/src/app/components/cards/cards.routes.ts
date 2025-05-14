import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards.component';
import { DebitComponent } from './components/debit/debit.component';
import { CreditComponent } from './components/credit/credit.component';
import { CardComponent } from './components/card/card.component';


const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
    children: [
      { path: '', redirectTo: 'debit', pathMatch: 'full' }, // Redireciona para debit dentro do contexto de cards
      { path: 'debit', component: DebitComponent },
      { path: 'credit', component: CreditComponent },
      { path: ':cardId', component: CardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsRoutingModule {}
