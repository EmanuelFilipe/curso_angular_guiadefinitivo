import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appFocusSecondInput]',
    standalone: false
})
export class FocusSecondInputDirective {
    // @HostBinding('style.backgroundColor') bg: string = 'blue';
    // @HostBinding('style.color') color: string = 'white';
    // @HostBinding('style.fontSize') size = '30px';
    // @HostBinding('textContent') text: string = 'Sou uma div!'
}