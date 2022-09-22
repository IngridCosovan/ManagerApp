import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateChild} from "@angular/router";
// import { Observable } from "rxjs";
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanActivateChild {
// constructor(private authService: AuthService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
//     return this.authService.isLogged().then((logged: boolean) => {
//       if(logged) {
//         return true;
//       } else {
//          this.router.navigate(['/people']);
//       }
//     });
//   }
// CanActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
// return this.canActivate(childRoute, state);
// }
// }


//vezi cap * rezolvarea unei erori.
