import { Component, EventEmitter, Output } from '@angular/core';
import { PessoaFormControllerService } from './pessoa-form-controller.service';

@Component({
  selector: 'app-form-builder-externo-com-service',
  standalone: false,
  templateUrl: './form-builder-externo-com-service.component.html',
  styleUrl: './form-builder-externo-com-service.component.scss',
})
export class FormBuilderExternoComServiceComponent {
  @Output('onFormSubmit') onFormSubmiEmit = new EventEmitter()
  
  constructor(
    public readonly _pessoaFormControllerService: PessoaFormControllerService
  ) {}

  onFormSubmit() {
    console.log('submit', this._pessoaFormControllerService.pessoaForm.value)
    this.onFormSubmiEmit.emit(this._pessoaFormControllerService.pessoaForm.value)
  }
}
