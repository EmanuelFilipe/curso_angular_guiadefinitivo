import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {
  // permite alterar propriedades ou atributos do elemento onde a diretiva é aplicada
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // permite ouvir eventos do elemento onde a diretiva é aplicada
  @HostListener('mouseover') onMouseOver() {
    console.log('Mouse over - highlight directive');
    this.backgroundColor = 'orange';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'transparent';
  }
}