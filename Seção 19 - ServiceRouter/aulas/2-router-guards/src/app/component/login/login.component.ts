import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  subscription!: Subscription

  constructor(private authService: AuthService,
    private router: Router
  ) {}

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  })

  onLogin() {
    //var login = this.loginForm.getRawValue()
    this.subscription = this.authService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe({
      next: (_) => {
        this.router.navigate(['dashboard'])
      },
      complete: () => {
        
      },
      error: error => {
        console.error(error)
        const UNAUTHORIZED_CREDENTIALS_ERROR = 401

        if (error.status === UNAUTHORIZED_CREDENTIALS_ERROR)
          this.loginForm.setErrors({ invalidCredentials: true })
        else 
          this.loginForm.setErrors({ generalCredentialsError: true })
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
