import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: false,
  
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }
  // activatedRoute é a rota pai
  // vai concatenar a rota pai com a rota filha
  navigateToDebit() {
    this.router.navigate(['debit'], { relativeTo: this.activatedRoute})
  }

  navigateToCredit() {
    this.router.navigate(['credit'], { relativeTo: this.activatedRoute})
  }
}
