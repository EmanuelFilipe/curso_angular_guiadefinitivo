import { ConfigService } from './services/config.service';
import { AuthService } from './services/auth.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private configService: ConfigService) {

  }
  ngOnInit(): void {
    const apiUrl = this.configService.getConfig('apiUrl')
  }
  title = '2-router-guards';
}
