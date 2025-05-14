
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserService } from '../../services/update-user.service';
import { CreateUserService } from '../../services/create-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IUserRequest } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-infos',
  standalone: false,
  templateUrl: './user-infos.component.html',
  styleUrl: './user-infos.component.scss'
})
export class UserInfosComponent {
  constructor(private updateUserService: UpdateUserService,
    private createUserService: CreateUserService
  ) {

  }
  userInfosForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  updateUser() {
    this.updateUserService.updateUser(this.userInfosForm.value as IUserRequest).subscribe({
      next: () =>{
        this.userInfosForm.setErrors({'update-success': true})
      }, 
      error: (err) => {
        this.userInfosForm.setErrors({'update-error': true})
      }
    })
  }

  createUser() {
    debugger
    this.createUserService.createUser(this.userInfosForm.value as IUserRequest).subscribe({
      next: () =>{
        this.userInfosForm.setErrors({'create-user-success': true})
      }, 
      error: (err: HttpErrorResponse) => {
        debugger
        const ALREADY_EXISTING_USER = err.status === 409

        if (ALREADY_EXISTING_USER)
          return this.userInfosForm.setErrors({'existing-user-error': true})

        return this.userInfosForm.setErrors({'create-user-error': true})
      }
    })
  }
}