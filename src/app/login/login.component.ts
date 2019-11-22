import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  message;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username)
    console.log(this.password)

    this.userService.login(this.username, this.password)
      .then(user => {
        this.router.navigate(['profile']);
      });

    // if (this.username === 'bob' && this.password === 'hope') {
    //   this.router.navigate(['profile']);
    // } else {
    //   this.message = 'Sorry, try again';
    // }
  }
}
