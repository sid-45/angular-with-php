import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  alert:boolean=false;
  uri = 'http://localhost/backend';

  constructor(private http: HttpClient) { }

  addUser(name, phone, email, password) {
    const obj = {
                  name,
                  phone,
                  email,
                  password
                };
    console.log(obj);
    if(obj)
    {
      return this.http.post(`${this.uri}/adduser.php`, obj)
        .subscribe(res => {
          this.alert = true
        });
    }
  }

  // getUsers() {
  //   return this
  //          .http
  //          .get(`${this.uri}/users_list.php`);
  // }

  getUsers() {
    return this
           .http
           .get(`${this.uri}/users_list.php`);
  }
}
