import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _router = inject(Router);
  private readonly _loginService = inject(LoginService);

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  onLogin() {
    const payload = { 
      username: this.loginForm.value.username, 
      password: this.loginForm.value.password
    }

    this._loginService.login(payload.username, payload.password).subscribe({
      next: (tokenResponse) => {
        console.log('TOKEN:: ', tokenResponse)
        this._router.navigate(['user-infos'])
      },
      error: (error: HttpErrorResponse) => {
        console.error('subscribe error', error)
        const UNAUTHORIZED_RESPONSE_ERROR = 401
        
        if(error.status === UNAUTHORIZED_RESPONSE_ERROR)
          this.loginForm.setErrors({ 'invalidCredentials': true })
        else 
          this.loginForm.setErrors({ 'generalCredentialsError': true })
      }
    })
  }
}