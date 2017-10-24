import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GolfcourseComponent } from "./golfcourse/golfcourse.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full'},
     { path: 'home', component: HomeComponent },
     { path: 'golfcourse', component: GolfcourseComponent },
     { path: 'messages', component: MessagesComponent },
     { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);