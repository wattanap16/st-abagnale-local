import { Component } from "@angular/core";
import { AuthService } from "./auth.service";


@Component({
    selector: 'app-authentication',
    template: `
         <header class="row spacing">
             <nav class="col-md-8 col-md-offset-2">
                  <ul class="nav nav-tabs">
                      <li routerlinkActive="active"><a [routerLink]="['signup']">SignUp</a></li>
                      <li routerlinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">SignIn</a></li>
                      <li routerlinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">LogOut</a></li>
                  </ul>
             </nav>
         </header>
         <div class="row spacing">
            <router-outlet></router-outlet>
         </div>
    `
})
export class AuthenticationComponent {
    constructor(private authService: AuthService) {}
 
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}