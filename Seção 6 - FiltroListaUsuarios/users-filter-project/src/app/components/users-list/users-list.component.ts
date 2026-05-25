import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({ required: true }) usersList: IUser[] = [];
  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  //usersList: IUser[] = UsersList
  displayedColumns: string[] = ['name', 'date', 'status'];
  //dataSource = this.usersList;

  onUserSelected(user: IUser): void {
    this.userSelectedEmitt.emit(user);
  }
}
