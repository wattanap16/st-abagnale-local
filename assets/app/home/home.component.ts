
import { Component} from "@angular/core";



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
        h1 {
            
            font-style:  italic;
            font-size: 70px;
            width: 100%;
            text-align: center;
        }
        .bg {
            
            background-position: center;
            background-repeat: no-repeat;
            background-color: pink;
            height: 500px;
            width: 100%;
           
        }
        
    `]
})
export class HomeComponent {
   

}