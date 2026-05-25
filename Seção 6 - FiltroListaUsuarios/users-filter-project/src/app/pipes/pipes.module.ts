import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
    declarations: [
    PhonePipe,
    AddressPipe,
    DashIfEmptyPipe
  ],
    imports: [],
    exports: [
        PhonePipe,
        AddressPipe,
        DashIfEmptyPipe
    ]
})
export class PipesModule {
}