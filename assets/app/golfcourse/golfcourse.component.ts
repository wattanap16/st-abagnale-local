
import { Component, OnInit } from "@angular/core";



@Component({
    selector: 'app-golfcourse',
    templateUrl: './golfcourse.component.html',
    styles: [`
    .container-fluid {
        width: 100%;
        height: auto;
        
        position: relative;
        background: transparent;
        
        background-position: center;
        background-repeat: no-repeat;
    }
    .container-fluid img {
        width: 100%;
        height: 400px;
        transform: scale(1);
        background: transparent;
        position:relative;
        margin: 0px 5px 5px 0px;

    }

    .container-fluid img:hover {
        transform: scale(1.2);
    }
    
    .figure {
        
        position: relative;
        opacity: 0;
        transform: rotateY(-180deg) translateY(250px) ;
        transition: all 0.5s ease-in-out;
        overflow: hidden;
        cursor: pointer;
        
    
    }
    
    .is-showing {
        opacity: 1;
        transform: rotateY(0deg) translateY(0px) ;
     
    }
     
    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        overflow: hidden;
        width: 100%;
        height: 0;
        transition: 0.5s ease-in-out;
      }
      
      .figure:hover .overlay {
        height: 100%;
      }
      
      .text {
        white-space: nowrap; 
        color: black;
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
      }
    
    
    `]
        
   

})

export class GolfcourseComponent implements OnInit{
    fullImagePath: [string[]];
   

      constructor() {
       
        this.fullImagePath = [ [('/images/golfcourse/B01.jpg'),('fairy1')],
                               [('/images/golfcourse/B02.jpg'),('fairy2')],
                               [('/images/golfcourse/B03.jpg'),('fairy3')],
                               [('/images/golfcourse/B04.jpg'),('fairy4')],
                               [('/images/golfcourse/B05.jpg'),('fairy5')],
                               [('/images/golfcourse/B06.jpg'),('fairy6')],
                               [('/images/golfcourse/B07.jpg'),('fairy7')],
                               [('/images/golfcourse/B08.jpg'),('fairy8')],
                               [('/images/golfcourse/B09.jpg'),('fairy9')],
                               [('/images/golfcourse/B10.jpg'),('fairy10')],
                               [('/images/golfcourse/B11.jpg'),('fairy11')],
                               [('/images/golfcourse/B12.jpg'),('fairy12')],
                               [('/images/golfcourse/B13.jpg'),('fairy13')],
                               [('/images/golfcourse/B14.jpg'),('fairy14')],
                               [('/images/golfcourse/B15.jpg'),('fairy15')],
                               [('/images/golfcourse/B16.jpg'),('fairy16')],
                               [('/images/golfcourse/B17.jpg'),('fairy17')],
                               [('/images/golfcourse/B18.jpg'),('fairy18')] ];

           

      }
    
      ngOnInit() {
      }
    
      
}
