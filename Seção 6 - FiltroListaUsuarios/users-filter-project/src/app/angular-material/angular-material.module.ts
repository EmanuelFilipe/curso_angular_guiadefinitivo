import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from "@angular/material/table";

import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatTableModule
    ], providers: [
        provideNativeDateAdapter()
    ]
})
export class AngularMaterialModule {

}