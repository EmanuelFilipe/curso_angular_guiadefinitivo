import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteAuthComponent } from './component/teste-auth/teste-auth.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotAuthorizedComponent } from './component/not-authorized/not-authorized.component';
import { GeneralComponent } from './component/general/general.component';
import { PaymentsComponent } from './component/payments/payments.component';
import { AdminComponent } from './component/admin/admin.component';
import { DebitComponent } from './component/debit/debit.component';
import { CreditComponent } from './component/credit/credit.component';
import { AuthGuard } from './guards/auth.guard';
import { scopesGuard } from './guards/scopes.guard';
import { authWithScopesGuard } from './guards/auth-with-scopes.guard';
import { WalletGuard } from './guards/wallet.guard';
import { ContactsComponent } from './component/contacts/contacts.component';
import { generalInfosResolver } from './resolvers/general-infos.resolver';
import { AsyncPipe } from '@angular/common';
import { logoutGuard } from './guards/logout.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    // canActivate so é chamado quando aciona a url principal, nao é chamado para os filhos
    //canActivate: [AuthGuard()], assim todo mundo dentro de dashboard precisa estar logado
    //canActivate: [AuthGuard(), scopesGuard('dashboard')], 
    canActivate: [authWithScopesGuard('dashboard')], //[AuthGuard(), scopesGuard('dashboard')],
    canActivateChild: [AuthGuard()],
    canDeactivate: [logoutGuard()],
    children: [
      { path: '', redirectTo: 'general', pathMatch: 'full' },
      { 
        path: 'general', 
        component: GeneralComponent,
        resolve: {
          generalInfos: generalInfosResolver
        }
      },
      { 
        path: 'payments', 
        component: PaymentsComponent,
        canActivate: [scopesGuard('pagamentos')],
        children: [
          {
            path: '',
            canActivateChild: [WalletGuard()],
            children: [
              { path: 'debit', component: DebitComponent },
              { path: 'credit', component: CreditComponent },
            ]
          },
          {
            path: 'contacts',
            component: ContactsComponent
          }
        ]
      },
      { 
        path: 'admin', 
        component: AdminComponent,
        canActivate: [scopesGuard('admin')],
       },
    ]
  },
  { path: 'not-authorized', component: NotAuthorizedComponent, data: { type: 'not-authorized' } },
  { path: '**', component: NotAuthorizedComponent, data: { type: 'not-found' }  },
  { path: 'teste', component: TesteAuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AsyncPipe],
  exports: [RouterModule]
})
export class AppRoutingModule { }
