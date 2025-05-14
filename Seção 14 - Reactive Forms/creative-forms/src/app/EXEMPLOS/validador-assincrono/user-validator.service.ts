import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './users.interface';
import { map, Observable, of } from 'rxjs';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserValidatorService implements AsyncValidator {
    constructor(private readonly usersService: UsersService) {}

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        if (!control.dirty) return of(null);

        return this.usersService.getUsers().pipe(
            map((usersList) => {
                const hasUser = usersList.find((user) => {
                    user.name.toLowerCase() === control.value.trim().toLowerCase()
                })

                if (hasUser) return null

                return { userValidator: true }
            })
        )
    }
} 