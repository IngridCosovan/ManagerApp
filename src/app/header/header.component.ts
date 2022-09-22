import { AuthService } from './../auth.service';
import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  doLogin() {
   this.authService.logIn;
  }
}
