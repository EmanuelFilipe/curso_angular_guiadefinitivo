import { Component, Input } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

function handlePlanType(value: string): string {
  if(value) {
    return value.toUpperCase();
  } else {
    return 'SIMPLES'
  }
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  private _planType: string = '';
  // não é obrigatório o input
  @Input() planPrice: number = 0

  // torna obrigatório o input  
  //@Input({required: true, alias: 'planTypeAlias'}) planType: string = ''

  // @Input({required: true, alias: 'planTypeAlias'})
  // set planTypeAlias(value: string) {
  //   this._planType = value.toUpperCase();
  // }
  

  // get planType(): string {
  //   return this._planType;
  // }

  // USANDO TRANSFORM
  //@Input({ required: true, alias: 'planTypeAlias', transform: (value: string) => value.toUpperCase() }) planType: string = ''

  //USANDO FUNCTION
  @Input({ required: true, alias: 'planTypeAlias', transform: (value: string) => handlePlanType(value) }) planType: string = ''

  

  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100
    }
  };
  
    // tipo: 'Simples',
    // preco: `R$ ${1000},00/Mês`

  // tipo: string = 'Teste'
  // preco: number = 1000

  // getFullPrice() : string {
  //   return `R$ ${this.preco},00/Mês`
  // }

  buttonClicked(state: boolean) {
    console.log('O botão do card foi clicado!', state);
  }


}
