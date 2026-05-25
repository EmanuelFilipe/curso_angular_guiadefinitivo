import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Output() onFilterEmitt = new EventEmitter<IFilterOptions>();

  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  }

  statusList = [
    {
      description: 'Ativo',
      value: true
    },
    {
      description: 'Inativo',
      value: false
    }
  ]

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }

  // dateSelected(date: Date) {
  //   console.log(date);
  // }
  
  // foods = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
}
