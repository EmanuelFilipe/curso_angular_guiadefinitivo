import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemDiretivaComponent } from './sem-diretiva/sem-diretiva.component';
import { ComDiretivaComponent } from './com-diretiva/com-diretiva.component';
import { HighlightDirective } from './direcives/highlight.directive';
import { DisabledDirective } from './direcives/disabled.directive';
import { StyleDirective } from './direcives/style.directive';
import { ClassDirective } from './direcives/class.directive';
import { ListenerDirective } from './direcives/listener.directive';
import { InputBackgroundDirective } from './direcives/input-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemDiretivaComponent,
    ComDiretivaComponent,
    HighlightDirective,
    DisabledDirective,
    StyleDirective,
    ClassDirective,
    ListenerDirective,
    InputBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
