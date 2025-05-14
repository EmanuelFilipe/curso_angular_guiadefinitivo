import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informations',
  standalone: false,
  
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute)
  nome: string = ''
  idade: string = ''

  ngOnInit(): void {
    this.nome = this.activatedRoute.snapshot.queryParams['nome']
    this.idade = this.activatedRoute.snapshot.queryParams['idade']
  }

}
