import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-initial',
  standalone: false,
  
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.scss'
})
export class InitialComponent implements OnInit {
  @Input() isActive: string = ''
  @Input() isAdmin: string = ''

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isActive = params['isActive']
      this.isAdmin = params['isAdmin']
    })
  }
}
