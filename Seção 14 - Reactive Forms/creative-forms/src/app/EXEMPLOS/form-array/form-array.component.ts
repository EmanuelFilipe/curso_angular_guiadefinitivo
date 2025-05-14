import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: false,
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {


  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormControl('', [Validators.required])
    ])
  })

  constructor() {
    console.log(this.musicasForm)
  }

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray
  }

  adicionarMusica() {
    this.musicas.push(new FormControl('Novo', [Validators.required]))
  }

  removerMusica(musicaIndex: number) {
    this.musicas.removeAt(musicaIndex)
  }
}
