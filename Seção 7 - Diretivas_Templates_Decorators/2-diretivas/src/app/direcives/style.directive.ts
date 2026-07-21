import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appStyle]',
    standalone: false
})
export class StyleDirective {
    //@HostBinding('attr.style') attrStyle = 'background-color: orange; color: white; ';

    //@HostBinding('style') style = 'background-color: orange; color: white';
    
    @HostBinding('style') propStyleObj = {
        backgroundColor: 'red',
        color: 'white'
    };
    
    // @HostBinding('style.backgroundColor') bgColor = 'green';
    // @HostBinding('style.color') color = 'white';

    //@HostBinding('style.fontSize.px') fontSize = 40;
}
