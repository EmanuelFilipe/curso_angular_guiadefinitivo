import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './EXEMPLOS/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidadorAssincronoComponent } from './EXEMPLOS/validador-assincrono/validador-assincrono.component';
import { FormGroupComponent } from './EXEMPLOS/form-group/form-group.component';
import { FormArrayComponent } from './EXEMPLOS/form-array/form-array.component';
import { FormArrayComGroupComponent } from './EXEMPLOS/form-array-com-group/form-array-com-group.component';
import { FormBuilderComponent } from './EXEMPLOS/form-builder/form-builder.component';
import { FormBuilderExternoComponent } from './EXEMPLOS/form-builder-externo/form-builder-externo.component';
import { FormBuilderExternoComServiceComponent } from './EXEMPLOS/form-builder-externo-com-service/form-builder-externo-com-service.component'

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    ValidadorAssincronoComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormArrayComGroupComponent,
    FormBuilderComponent,
    FormBuilderExternoComponent,
    FormBuilderExternoComServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
