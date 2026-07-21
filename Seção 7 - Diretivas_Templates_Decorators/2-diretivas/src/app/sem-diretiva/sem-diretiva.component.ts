import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  standalone: false,
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss'
})
export class SemDiretivaComponent {
  addBgColor: boolean = false;


  onMouseOver() {
    this.addBgColor = true;
    console.log('Mouse over');
  }

  onMouseOut() {
    this.addBgColor = false;
    console.log('Mouse out');
  }
}
