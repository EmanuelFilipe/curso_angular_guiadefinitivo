import { Component } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent {
  message: string = 'Mensagem do componente filho';

  dizerOi() {
    debugger
    alert('Oi do componente filho!');
  }
}
