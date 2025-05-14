import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: false,
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {
  pessoaForm!: FormGroup;
  
  constructor(private readonly _fb: FormBuilder) {
  }

  ngOnInit() {
    this.pessoaForm = this._fb.group({
      nome: ['', [Validators.required]],
      email: this._fb.control('', { validators: [Validators.required]})
    })
  }
}
