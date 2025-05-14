import { UserValidatorService } from './user-validator.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validador-assincrono',
  standalone: false,
  templateUrl: './validador-assincrono.component.html',
  styleUrl: './validador-assincrono.component.scss'
})
export class ValidadorAssincronoComponent {
  
  constructor(private readonly userValidatorService: UserValidatorService) {
  }
  
  nome = new FormControl('', {
    //asyncValidators: [this.userValidatorService.validate.bind(this.userValidatorService)],
    updateOn: 'blur'
  })

}
