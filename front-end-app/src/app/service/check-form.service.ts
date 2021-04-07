import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }

  checkFirstName(firstName: String | undefined) {
  if(firstName == undefined)
    return false;
  else
    return true;
  }

  checkSecondName(secondName: String | undefined) {
  if(secondName == undefined)
    return false;
  else
    return true;
  }

  checkPhone(phone: String | undefined) {
  if(phone == undefined)
    return false;
  else
    return true;
  }

  checkEmail(email: String | undefined) {
  if(email == undefined)
    return false;
  else
    return true;
  }

  checkLogin(login: String | undefined) {
  if(login == undefined)
    return false;
  else
    return true;
  }

  checkPassword(password: String | undefined) {
  if(password == undefined)
    return false;
  else
    return true;
  }

// № 6 Форма регистрации 19 минута

}
