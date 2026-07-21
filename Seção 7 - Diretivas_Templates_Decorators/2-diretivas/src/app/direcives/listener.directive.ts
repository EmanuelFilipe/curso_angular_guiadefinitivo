import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[appListener]',
    standalone: false
})
export class ListenerDirective {
    @HostListener('click') onClick() {
        console.log('Clicou');
    }
    // pegando valor do evento
    // se precisar passar um valor especifico, segue como segundo parametro
    @HostListener('keyup', ['$event', "'meu argumento teste'"]) 
    onKeyup(event: KeyboardEvent, param2: string) {
        
        console.log('Tecla pressionada', event.key);
        (event.target as HTMLInputElement).value = param2;  
    }
}