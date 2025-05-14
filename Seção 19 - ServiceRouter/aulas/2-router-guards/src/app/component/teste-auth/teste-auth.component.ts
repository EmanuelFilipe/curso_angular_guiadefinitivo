import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-teste-auth',
  standalone: false,
  templateUrl: './teste-auth.component.html',
  styleUrl: './teste-auth.component.scss'
})
export class TesteAuthComponent {

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login('user', 'user').subscribe({
      next: response => {
        console.log('login', response)
      },
      error: error => {
        console.error(error)
      }
    })
  }

  verify() {
    this.authService.verifyToken().subscribe({
      next: response => {
        console.log('response verify: ', response)
      },
      error: error => {
        console.error(error)
      }
    })
  }

  scopes() {
    console.log('scopes' , this.authService.getUserScopes())
  }

}
