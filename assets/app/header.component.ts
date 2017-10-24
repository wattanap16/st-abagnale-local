import { Component } from "@angular/core";


@Component({
      selector: 'app-header',
      template: `
           <header class="row" >
             <nav class="col-md-12 ">
                <ul class="nav nav-pills navbar-inverse ">
                    <li routerLinkActive="active"><a [routerLink]="['/home']"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a><li>
                    <li routerLinkActive="active"><a [routerLink]="['/golfcourse']"><span class="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span> Course</a><li>
                    <li routerLinkActive="active"><a [routerLink]="['/messages']"><span class="glyphicon glyphicon-comment" aria-hidden="true"></span> Messager</a><li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span> Authentication</a><li>
                </ul>
             </nav>
           </header>
      `
})

export class HeaderComponent {

}