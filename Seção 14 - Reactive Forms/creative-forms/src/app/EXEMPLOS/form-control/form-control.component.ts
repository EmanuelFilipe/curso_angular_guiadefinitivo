import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { invalidTextValidator } from './invalid-text-validator';

@Component({
  selector: 'app-form-control',
  standalone: false,
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
})
/**
 * inclui iniciar campo com valor, desabilitar, validator
 * minlength, setar valor, limpar valor
 * exibir mensagem de erro de validator
 * 
 */
export class FormControlComponent {

  // iniciar disabled = true
  //nome = new FormControl({ value: '', disabled: true }, [Validators.required]);
  //nome = new FormControl('', [Validators.required]);

  // resetar formcontrol mantendo o valor inicial
  //  'nonNullable: true' vai manter o valor inicial apos reset
  //nome = new FormControl('Inicial', { nonNullable: true, validators: [Validators.required] });
  
  //nome = new FormControl('Inicial', [Validators.required, Validators.minLength(6)]);
  
  
  // nome = new FormControl('Inicial', { 
  //   nonNullable: true, 
  //   validators: [Validators.required, Validators.minLength(6), Validators.maxLength(8)], 
  //   updateOn: 'blur' // dispara os validadores - default / blur dispara validador depois q sair do component
  // });
  
  // validator customizado
  nome = new FormControl('Inicial', [invalidTextValidator('filipe')]);
  
  ngOnInit() {
    console.log(this.nome);

    // sempre ira emitir um event quando digitado algum valor
    this.nome.valueChanges.subscribe(result => console.log('valueChanges: ', result))

    this.nome.statusChanges.subscribe(result => console.log('statusChanges: ', result))
  }

  mostrarStatus() {
    console.log(this.nome);
  }

  alterarValor() {
  
    //this.nome.setValue('Alterado!');
    this.nome.setValue('Fi');
  }

  inputAlterado(event: any) {
    console.log('event', event);
  }

  habilitar() {
    this.nome.enable()
  }

  desabilitar() {
    this.nome.disable()
  }

  // limpando propriedade
  resetar() {
    this.nome.reset()
    // resetar formcontrol passando um novo valor
    //this.nome.reset('valor reset')
  }

  /**
  * eles sobreescrevem os validators existentes
  * se usar o setValidators tem que chamar o metodo de update que vaz a verificação dos validators no momento atual
  */
  setValidators() {
    this.nome.setValidators(Validators.minLength(3))
    this.nome.updateValueAndValidity()
  }

  /**
   * Adiciona, mas sem sobreescrever os validators existentes
   */
  addValidator() {
    this.nome.addValidators(Validators.maxLength(8))
    this.nome.updateValueAndValidity()
  }
}
