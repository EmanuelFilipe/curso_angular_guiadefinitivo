import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projetos-components';
  cardPlanType: string = 'Simples'
  cardPlanPrice: number = 90

  recebeOutput() {
    console.log('Evento recebido no AppComponent:', event);
  }

  handlePlanType(text: string) {
    this.cardPlanType = text;
  }
}
