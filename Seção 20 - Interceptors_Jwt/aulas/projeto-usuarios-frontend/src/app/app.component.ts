import { LoadingService } from './services/loading.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-usuarios-frontend';
  readonly loadingService = inject(LoadingService)

}
