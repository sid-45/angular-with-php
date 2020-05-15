import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataValidator } from '../validation'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password="";
  inputerror={};
  message="Welcome";
  flag = true

  constructor(private valid: DataValidator,private http: HttpClient) {  }

  ngOnInit() {
  }

  dologin(){

    if (this.valid.isNull(this.email)) {
      this.flag = false
      this.inputerror["email"] = "Please enter your email address"
    }else if(this.valid.formate(this.email)){
      this.flag = false
      this.inputerror["email"] = "email id is not valid"
    }
    
    if (this.valid.isNull(this.password)) {
      this.flag = false
      this.inputerror["password"] = "Please enter your password"
    }
    if (this.flag) {
      let myarray = [{email: this.email , password:this.password}];
      
      console.log('array for send with post: '+myarray);
     
      // if (this.email == "admin@gmail.com" && this.password == "admin") {
      //   this.message = "Login Successfully"
      // } else {
      //   this.message = "You have entered wrong credential"
      // }
      
    }
    
  }

}
