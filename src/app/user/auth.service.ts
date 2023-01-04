import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Alex',
      lastName: 'Popa',
    }
  }
  //acum cand chemam loginUser, vom face un call catre server si vom loga userul si dupa vom seta
  //currentUser property.

  isAuthenticated() {
   return !!this.currentUser;
  }
//cu metoda asta dam de stire aplicatiei daca suntem logati sau nu.
  //ne returneaza true daca currentUserul este setat.

  updateCurrentUser(firstName: string, lastName: string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

}
