import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  angForm: FormGroup;
  alert: boolean=false;
  resMsg: string= 'test message success';
  constructor(private fb: FormBuilder, private ps: UsersService) {
    this.createForm();
  }
  
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10)] ],
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)] ]
    });
  }

  signup(name, phone, email, password) {
   
    this.ps.addUser(name, phone, email, password);
    // this.alert = true
    // this.ps.addUser(name, phone, email, password).subscribe(data => {
    //   this.resMsg = data.success;
    //   console.log(this.resMsg);
    //   this.alert = true
    // }, error => console.error(error));
  }

  closeAlert(){
    this.alert = false
  }

  ngOnInit() {
  }

}
