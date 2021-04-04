import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }

  checkFirstName(firstName) {
  if(this.firstName == undefined)
    return false;
  else
    return true;
  }

  checkSecondName(secondName) {
  if(this.secondName == undefined)
    return false;
  else
    return true;
  }

  checkPhone(phone) {
  if(this.phone == undefined)
    return false;
  else
    return true;
  }

  checkEmail(email) {
  if(this.email == undefined)
    return false;
  else
    return true;
  }

  checkLogin(login) {
  if(this.login == undefined)
    return false;
  else
    return true;
  }

  checkPassword(password) {
  if(this.password == undefined)
    return false;
  else
    return true;
  }



}
