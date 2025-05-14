import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-not-authorized',
  standalone: false,
  
  templateUrl: './not-authorized.component.html',
  styleUrl: './not-authorized.component.scss'
})
export class NotAuthorizedComponent {
  // observable vazio
  data$: Observable<Data> = of()

  constructor(private readonly activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.data$ = this.activatedRoute.data
  }

}
