import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/UserService';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAllUsers()
      .then(users => this.users = users);
  }

  deleteUser(user) {
    this.userService.deleteUser(user)
      .then(users => this.users = users);
  }
}
