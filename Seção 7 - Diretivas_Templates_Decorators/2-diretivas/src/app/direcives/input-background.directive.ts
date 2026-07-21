import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appInputBackground]',
    standalone: false
})
export class InputBackgroundDirective {
    // nome do input é o mesmo da diretiva
    @Input() appInputBackground: string = 'white';
    @Input() textColor: string = 'black';

    @HostBinding('style.backgroundColor') bgColor: string = '';
    @HostBinding('style.color') color: string = '';

    @HostListener('focus') onFocus() {
        this.bgColor = this.appInputBackground;
        this.color = this.textColor;
    }

    @HostListener('blur') onBlur() {
        this.bgColor = 'white';
        this.color = 'black';
    }

    // @HostListener('keyup') onKeyUp() {
    //     this.color = 'white';
    // }
}