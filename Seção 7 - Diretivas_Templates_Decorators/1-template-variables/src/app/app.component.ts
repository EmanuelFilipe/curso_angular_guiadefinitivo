import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit   {

  @ViewChild('meuInput') 
  meuInputEl!: ElementRef<HTMLInputElement>;

  @ViewChild('minhaDiv')
  minhaDivEl!: ElementRef<HTMLDivElement>;

  // acesso a uma instancia de um compoente filho
  @ViewChild('filhoComp')
  filhoCompRef!: FilhoComponent

  @ViewChildren('meuButton') 
  buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;
  
  private _cdRef = inject(ChangeDetectorRef);


  buttonList = ['Button 1', 'Button 2', 'Button 3'];

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.meuInputEl.nativeElement.focus()
    
    // captura somente mudança na estrutura do objeto
    this.buttonsEl.changes.subscribe((result) => {
      console.log('Buttons changed:', result);
    })
  }

  remove() {
    this.buttonList.pop();
  }

  changeColor(event: Event) {
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = 'orange';
    button.style.color = 'white';

    console.log(button);
  }

  resetButtons() {
    this.buttonsEl.forEach(buttonRef => {
      const button = buttonRef.nativeElement;
      button.style.backgroundColor = '';
      button.style.color = '';
    });
  }

  changeDetection() {
    this._cdRef.detectChanges();
  }

  updateInputText() {
    this.meuInputEl.nativeElement.value = 'Valor atualizado'; 
    this.meuInputEl.nativeElement.focus()
  }

  updateDivContent() {
    this.minhaDivEl.nativeElement.innerHTML = '<strong>Conteúdo alterado</strong>';
  }

  hello() {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Mensagem atualizada pelo componente pai';
  }
}
