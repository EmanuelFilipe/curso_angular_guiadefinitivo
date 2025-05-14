import { Component, EventEmitter, Output } from '@angular/core';
import { PessoaFormController } from './pessoa-form-controller';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-externo',
  standalone: false,
  templateUrl: './form-builder-externo.component.html',
  styleUrl: './form-builder-externo.component.scss'
})
export class FormBuilderExternoComponent extends PessoaFormController {
  @Output('onFormSubmit') onFormSubmiEmit = new EventEmitter()

onFormSubmit() {
  console.log('submit', this.pessoaForm.value)
  this.onFormSubmiEmit.emit(this.pessoaForm.value)
}

  // o nome precisa ser diferente do que extends
  constructor(private readonly _fbMain: FormBuilder) {
    super(_fbMain)
  }
}
