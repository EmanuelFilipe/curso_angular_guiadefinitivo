import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1-service-router';

  constructor(private _router: Router) {

  }
  navigateToInitial() {
    this._router.navigate(['initial'], { queryParams: { isActive: true, isAdmin: false } })
  }

  navigateToContacts() {
    this._router.navigate(['contacts'])
  }

  navigateToInformations() {
    this._router.navigate(['informations'], { queryParams: { nome: 'Maria', idade: 30 } })
  }

  navigateToCards() {
    this._router.navigate(['cards'])
  }
}
