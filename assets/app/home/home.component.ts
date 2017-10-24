
import { Component, OnInit} from "@angular/core";



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
            background-image: url("/images/g1.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-color: pink;
            height: 500px;
            width: 100%;
           
        }
        img {
            width: 100%;
            height: 100%;
        }
    `]
})
export class HomeComponent implements OnInit{
    fullImagePath: string;
    
      constructor() {
       
        this.fullImagePath = ('/images/g1.jpg');
      }
    
      ngOnInit() {
      }

}

/*export class HomeComponent {
    

}*/