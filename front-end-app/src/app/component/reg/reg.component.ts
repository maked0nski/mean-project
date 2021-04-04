import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  firstName: String | undefined;
  secondName: String | undefined;
  phone: String | undefined;
  email: String | undefined;
  login: String | undefined;
  password: String | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  userRegisterClick() {
    const user = {
      firstName:  this.firstName,
      secondName: this.secondName,
      phone: this.phone,
      email: this.email,
      login: this.login,
      password: this.password
    };
    console.log(user)
  }

}
