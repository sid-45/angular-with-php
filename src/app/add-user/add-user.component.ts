import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  angForm: FormGroup;
  //submitted = false;
  constructor(private fb: FormBuilder, private us: UsersService) {
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

  addUser(name, phone, email, password) {
    //this.submitted = true;
    // if (this.angForm.invalid) {
    //   console.log('invalid');
    //   return;
   // }else{
      console.log('add new');
      this.us.addUser(name, phone, email, password);
    //}
    
  }


  ngOnInit() {
  }

}
