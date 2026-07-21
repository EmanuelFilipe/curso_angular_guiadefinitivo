import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDisabled]',
  standalone: false
})
export class DisabledDirective {
  //@HostBinding('attr.disabled') attrDisabled = false;
  @HostBinding('disabled') propDisabled = false;
}