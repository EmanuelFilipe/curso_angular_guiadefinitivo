import { Component, ElementRef, inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  standalone: false,
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent {
  private readonly _elRef = inject(ElementRef)
  private readonly _renderer2 = inject(Renderer2)

  createElement(inputText: string) {
    const divEl = document.createElement('div');
    divEl.innerHTML = inputText;
    divEl.style.backgroundColor = 'red';
    divEl.style.color = 'white';
    divEl.style.fontSize = '30px';

    this._elRef.nativeElement.appendChild(divEl);
  }

  createElementCorrect(inputText: string){
    const divEl = this._renderer2.createElement('div');
    const text = this._renderer2.createText(inputText);

    this._renderer2.appendChild(divEl, text)
    this._renderer2.setStyle(divEl, 'fontSize', '30px')
    this._renderer2.addClass(divEl, 'bg-red')

    this._renderer2.appendChild(this._elRef.nativeElement, divEl)

    //this._elRef.nativeElement.appendChild(divEl);
  }
}
