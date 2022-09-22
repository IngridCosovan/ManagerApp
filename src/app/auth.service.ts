import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false;

  isLogged() {
    const result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.logged);
      }, 1000);
    });
    return result;
  }

  logIn() {
    this.logged = true;
  }

  logOut() {
    this.logged = false;
  }
}
