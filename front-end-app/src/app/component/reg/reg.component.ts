import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../../service/check-form.service';

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


  constructor(private checkForm: CheckFormService) { }

  ngOnInit(): void {
  }

  // @ts-ignore
  userRegisterClick() {
    const user = {
      firstName:  this.firstName,
      secondName: this.secondName,
      phone: this.phone,
      email: this.email,
      login: this.login,
      password: this.password
    };
    if(!this.checkForm.checkFirstName(user.firstName)){
      console.log("Введіть Ваше ім'я")
      return false;
    } else if(!this.checkForm.checkSecondName(user.secondName)){
      console.log("Введіть Ваше прізвище")
      return false;
    } else if(!this.checkForm.checkEmail(user.email)){
      console.log("Введіть Ваш e-mail")
      return false;
    } else if(!this.checkForm.checkPhone(user.phone)){
      console.log("Введіть Ваш номер телефону")
      return false;
    } else if(!this.checkForm.checkLogin(user.login)){
      console.log("Введіть Ваш логін")
      return false;
    } else if(!this.checkForm.checkPassword(user.password)){
      console.log("Введіть Ваш пароль")
      return false;
    }

  }

}
