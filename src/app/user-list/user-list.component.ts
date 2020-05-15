import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  title = 'Userslist';
  data = [];

  // constructor(private http: HttpClient) {
  //   this.http.get('http://localhost/backend/users_list.php').subscribe(data => {
  //   this.data.push(data);
  //   console.log(this.data);
  //   }, error => console.error(error));
  // }

  constructor(private us: UsersService) { }

  ngOnInit() {
    this.us
      .getUsers()
      .subscribe((data: data[]) => {
        this.data = data;
    });
  }


}
