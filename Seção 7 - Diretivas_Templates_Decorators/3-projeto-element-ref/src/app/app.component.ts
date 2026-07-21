import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  //@ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;
  
  constructor(private readonly _elRef: ElementRef) {
    // tem acesso a todos os elementos do app-route, a raiz da aplicação
  }

  ngOnInit(): void {
    //console.log(this._elRef);

    // // Pegando o elemento pelo ID
    // const divEl = this._elRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement
    // divEl.textContent = 'Segundo Conteúdo alterado via ElementRef';
    // divEl.style.backgroundColor = 'green';

    // // Adicionando um evento de clique no elemento
    // divEl.addEventListener('click', () => {
    //   alert('Div clicada!');
    // });

    // colocando foco no segundo input do formulário
    // const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];
    
    // if (inputList.length > 1) {
    //   inputList[1].focus();
    // }

  }

  ngAfterViewInit(): void {
    // this.divEl.nativeElement.style.backgroundColor = 'orange';
    // this.divEl.nativeElement.textContent = 'Conteúdo alterado via ElementRef';
    // this.divEl.nativeElement.classList.add('minha-classe');

    const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];
    
    if (inputList.length > 1) {
      inputList[1].focus();
    }
  }

  createElement() {
    const novaDiv = document.createElement('div')
    novaDiv.textContent = 'sou a nova div'
    novaDiv.classList.add('bg-red')

    this._elRef.nativeElement.appendChild(novaDiv)
  }
}
