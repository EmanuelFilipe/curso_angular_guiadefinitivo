import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InformationsComponent } from './components/informations/informations.component';

const routes: Routes = [
  { path: '', redirectTo: '/initial', pathMatch: 'full' }, // Redireciona para /initial
  { path: 'initial', component: InitialComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'informations', component: InformationsComponent },
  {
    path: 'cards',
    loadChildren: () => import('./components/cards/cards.routes').then(m => m.CardsRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
