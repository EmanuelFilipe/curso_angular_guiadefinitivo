import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: false,
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {


  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required])
    })
  }, {
    //updateOn: 'blur' // registra o valueChanges apos o blur
    //updateOn: 'submit' // registra o valueChanges no click do submit
  })

  constructor() {
    console.log(this.pessoaForm)

    console.log(this.pessoaForm.get('nome')?.value)

    // intercepta toda qualquer alteração nos controls registrados e os loga
    this.pessoaForm.valueChanges.subscribe((value) => console.log('valueChanges => pessoa form', value))
  }

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl
  }

  get endereco(): FormGroup {
    return this.pessoaForm.get('endereco') as FormGroup
  }
  mostrarValue() {
    console.log(this.pessoaForm.value)
    console.log(this.email)
  }

  onFormSubmit() {
    console.log(this.pessoaForm.value)
  }

  alteracaoTotal() {
    // para usar o setvalue, precisa informar todos os controls registrados dentro dele de uma vez
    this.pessoaForm.setValue({
      nome: 'nome alt',
      email: 'email alt',
      endereco: {
        rua: 'rua alt',
        numero: 'numero alt'
      }
    })
  }

  alteracaoParcial() {
    // altera os componentes que quiser
    this.pessoaForm.patchValue({
      nome: 'Nome Alt Parcial',
      endereco: {
        rua: 'Rual Alt Parcial'
      }
    })
  }

}
