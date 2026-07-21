import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';

import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from "../pipes/pipes.module";
import { UserFilterComponent } from "./user-filter/user-filter.component";

@NgModule({
    declarations: [
      UserDetailsComponent,
      UserFilterComponent,
      UsersListComponent
    ],
    imports: [
      AngularMaterialModule,
      FormsModule,
      CommonModule,
      PipesModule
    ],
    exports: [
      UserDetailsComponent,
      UserFilterComponent,
      UsersListComponent
    ]
})
export class ComponentsModule {

}