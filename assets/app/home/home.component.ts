
import { Component, OnInit} from "@angular/core";



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
        .course-box {
            position: relative;
            height: 600px;
            background-image: url('/images/homeparalax/g1.jpg');
            background-repeat: no-repeat;
            background-size: 100% 600px;
            background-position: top center;
            background-attachment: fixed;
            overflow: hidden;
        }

        .golfer {
            width: 960px;
            height: 280px;
            background-image: url('/images/homeparalax/gf1.png');
            background-image-color: transparent;
            background-repeat: no-repeat;
            background-color: transparent;
            background-position: center;
            position: absolute;
            margin-top: 240px;
        }

        .tree {
            width: 100%;
            height: 480px;
           
            background-image-color: transparent;
            background-repeat: no-repeat;
            background-color: transparent;
            background-position:  top left;
            position: absolute;
            margin-top:-300px;

        }
        
        .fan {
            width: 1755px;
            height: 600px;
            background-image: url('/images/homeparalax/fan1.png');
            background-image-color: transparent;
            background-repeat: no-repeat;
            background-color: transparent;
            background-position: bottom ;
            position: absolute;
            margin-top:350px;
            
        }

        h1 {
            color: transparent;
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
    fullImagePath: [string];
    
      constructor() {
       
        this.fullImagePath = [('/images/homeparalax/fan1.png'),
                              ('/images/homeparalax/g1.jpg'),
                              ('/images/homeparalax/golfer1.jpg'),
                              ('/images/homeparalax/tree2.jpg')];
      }
    
      ngOnInit() {
      }

}

/*export class HomeComponent {
    

}*/