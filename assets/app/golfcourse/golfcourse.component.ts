
import { Component, OnInit } from "@angular/core";



@Component({
    selector: 'app-golfcourse',
    templateUrl: './golfcourse.component.html',
    styles: [`

        .showFGtext {
            position: absolute;
            top:20%;
            width: 100%;
            text-align: center;
            color: #000000;
            font-size: 27px;
            font-family: "Lato", sans-serif;
            letter-spacing: 8px;
            text-transform: uppercase;
      }
     
     .showFGtext .showFGtextborder {
         background-color: #111111;
         color: whitesmoke;
         padding: 10px;
         opacity: 0.7;
     }
     
     .showBGtext {
         position: absolute;
         top:70%;
         width: 100%;
         text-align: center;
         color: #000000;
         font-size: 27px;
         font-family: "Lato", sans-serif;
         letter-spacing: 8px;
         text-transform: uppercase;
     }
     
     .showBGtext .showBGtextborder {
          background-color: #111111;
          color: whitesmoke;
          padding: 10px;
          opacity: 0.5;
      }
     
     .showBG {
        position: relative;
        height: 700px;
        background-image: url('/images/golfcourse/a01.jpg');
        opacity: 1;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom center;
        background-attachment: fixed;
        overflow: hidden; 
     
     }
     
     .showFG {
        height: 350px;
        background-image: url('/images/golfcourse/a03.jpg');
        opacity: 1;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom center;
     }
     


    /* ------ course paralax ---- */
    .design-box {
       position: relative;
       height: 600px;
       background-image: url('/images/golfcourse/a01.jpg');
       background-repeat: no-repeat;
       background-size: 100% 600px;
       background-position: top center;
       background-attachment: fixed;
       overflow: hidden;
   }
   .mankind {
       width: 1200px;
       height: 450px;
       background-image: url('/images/golfcourse/a03.jpg');
       
       background-repeat: no-repeat;
       background-position: absolute;
       opacity:0.5;
       position: absolute;
       margin-top:0px;
   }
       /* ------ course pics ---- */

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
       
        this.fullImagePath = [ [('/images/golfcourse/B01.jpg'),('Willie Auchterlonie')],
                               [('/images/golfcourse/B02.jpg'),('Whinny Knowe')],
                               [('/images/golfcourse/B03.jpg'),('The Skelp')],
                               [('/images/golfcourse/B04.jpg'),('Crossgate')],
                               [('/images/golfcourse/B05.jpg'),('Hackie Barra')],
                               [('/images/golfcourse/B06.jpg'),('Playfair')],
                               [('/images/golfcourse/B07.jpg'),('Ayton')],
                               [('/images/golfcourse/B08.jpg'),('Eden Edge')],
                               [('/images/golfcourse/B09.jpg'),('Windy Tap')],
                               [('/images/golfcourse/B10.jpg'),('Spires')],
                               [('/images/golfcourse/B11.jpg'),('Treble-One')],
                               [('/images/golfcourse/B12.jpg'),('The Butts')],
                               [('/images/golfcourse/B13.jpg'),('Hale Bopp')],
                               [('/images/golfcourse/B14.jpg'),('Willie Whitelaw')],
                               [('/images/golfcourse/B15.jpg'),('Steel Gem')],
                               [('/images/golfcourse/B16.jpg'),('Freddie Tait')],
                               [('/images/golfcourse/B17.jpg'),('Ladyhead')],
                               [('/images/golfcourse/B18.jpg'),('Honeyman Howe')] ];

           

      }
    
      ngOnInit() {
          
      }
    
      
}
