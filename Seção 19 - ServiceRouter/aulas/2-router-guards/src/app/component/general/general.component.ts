import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-general',
  standalone: false,
  //imports: [AsyncPipe],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {
  data$: Observable<Data> = of({})
  private readonly activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.data$ = this.activatedRoute.data
  }

}
