import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  logout() {}
  register() {}
  findAllUsers() {
    return fetch('http://localhost:4000/api/users')
      .then(response => response.json());
  }
  deleteUser(user) {
    return fetch(`http://localhost:4000/api/users/${user.id}`, {
      method: 'delete'
    })
      .then(response => response.json());
  }
  createUser() {}
  login(username, password) {
    return fetch(`http://localhost:4000/login`, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => response.json())
  }
}
