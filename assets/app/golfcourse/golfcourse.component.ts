
import { Component, OnInit } from "@angular/core";



@Component({
    selector: 'app-golfcourse',
    templateUrl: './golfcourse.component.html',
    styles: [`
    .container-fluid {
        width: 100%;
        height: auto;
        
        position: relative;
        background :pink;
        background-image: url("/images/g1.jpg");
        background-position: center;
        background-repeat: no-repeat;
    }
    .container-fluid img {
        width: 100%;
        height: 400px;
        
        border:1px solid black;
        position:relative;
        
        margin: 0px 5px 5px 0px;
    }
    
    
    `]
        
   

})

export class GolfcourseComponent implements OnInit{
    fullImagePath: [string];
    
      constructor() {
       
        this.fullImagePath = [ ('/images/golfcourse/B01.jpg'),
                               ('/images/golfcourse/B02.jpg'),
                               ('/images/golfcourse/B03.jpg'),
                               ('/images/golfcourse/B04.jpg'),
                               ('/images/golfcourse/B05.jpg'),
                               ('/images/golfcourse/B06.jpg'),
                               ('/images/golfcourse/B07.jpg'),
                               ('/images/golfcourse/B08.jpg'),
                               ('/images/golfcourse/B09.jpg'),
                               ('/images/golfcourse/B10.jpg'),
                               ('/images/golfcourse/B11.jpg'),
                               ('/images/golfcourse/B12.jpg'),
                               ('/images/golfcourse/B13.jpg'),
                               ('/images/golfcourse/B14.jpg'),
                               ('/images/golfcourse/B15.jpg'),
                               ('/images/golfcourse/B16.jpg'),
                               ('/images/golfcourse/B17.jpg'),
                               ('/images/golfcourse/B18.jpg') ];

      }
    
      ngOnInit() {
      }
    
      
}
