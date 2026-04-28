import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText: string = 'Texto Inicial';
  inputType: string = 'text'
  inputDisabled: boolean = false
  buttonTitle: string = 'Teste do Botão'
  color: string = 'red'
  width = 150

  // Two Way Data Binding
  name: string = 'Filipe'

  // ngIf
  minhaPropIf: boolean = true

  //ng For
  personSelectedIndex: number  | undefined
  listaPessoas = [
    {
      nome: 'Filipe',
      idade: 30
    },
    {
      nome: 'Maria',
      idade: 25
    },
    { 
      nome: 'João',
      idade: 28
    }
  ]

  stylesObjJson = {
    width: '200px',
    backgroundColor: 'blue',
  }

  //style
  fontSize: number = 15;
  textColor: 'purple' | 'green'  = 'purple'

  //ngclass
  isGreen: boolean = true

  //pipe
  text: string = 'Filipe'
  pessoa = { 
    name: 'Filipe',
    status: 1
   }
  pessoa2 = { 
    name: 'Matheus',
    status: 2
   }
  pessoa3 = { 
    name: 'Ana',
    status: 3
   }

  updtateStylesObjJson() {
    // modo errado
    //this.stylesObjJson.width = '350px'
    //this.stylesObjJson.height = '80px'

    // precisa retornar um novo objeto
    this.stylesObjJson = {
      width: '350px',
       backgroundColor: 'green',
    }
  }

  enabledInput(): void {
    this.inputDisabled = false
  }

  disabledInput(): void {
   this.inputDisabled = true 
  }

  setPasswordInput() {
    this.inputType = 'password'
  }
  
  setTextInput() {    
    this.inputType = 'text'
  }

  setLogInput() {
    console.log(this.inputText)
  }

  handleInputKeyUp(event: KeyboardEvent) {
    const current = event.target as HTMLInputElement
    console.log(current.value)
  }

  selectPerson(index: number) {
    this.personSelectedIndex = index
  }

  incriseFontSize() {
    this.fontSize += 3
  }

  toogleFontColor() {
    this.textColor = this.textColor === 'purple' ? 'green' : 'purple'
  }

  getStyle(status: number) {
    console.log('getStyle')
    return {
    'active': status === 1,
    'partial': status === 2,
    'blocked': status === 3,
}
  }
}
