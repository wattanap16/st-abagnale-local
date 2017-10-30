
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
            width: 1520px;
            height: 680px;
            background-image: url('/images/homeparalax/t1.png');
            background-image-color: transparent;
            background-repeat: no-repeat;
            background-color: transparent;
            background-position:  top ;
            position: absolute;
            margin-left: 550px;
            margin-top:0px;
            
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




        /* ---- large-window ----*/
        
         .large-window {
             height: 300px;
             margin-top: 20px;
             border-radius: 50%;
             background-image: url('/images/homeparalax/lgwindow.jpg');
             background-position: center;
             background-repeat: no-repeat;
             background-attachment: fixed;
        
        }
        
      /* ------- tom-window ------ */

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
     padding: 5px;
     opacity: 0.6;
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
      padding: 5px;
      opacity: 0.6;
  }
 
 .showBG {
    position: relative;
    height: 700px;
    background-image: url('/images/homeparalax/newtom.jpg');
    opacity: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-attachment: fixed;
    overflow: hidden; 
 
 }
 
 .showFG {
    height: 350px;
    background-image: url('/images/homeparalax/oldtom.jpg');
    opacity: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
 }

 .showBG2 {
    position: relative;
    height: 700px;
    background-image: url('/images/homeparalax/pga1.jpg');
    opacity: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-attachment: fixed;
    overflow: hidden; 
 
 }
 
 .showFG2 {
    height: 350px;
    background-image: url('/images/homeparalax/pga2.jpg');
    opacity: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
 }
 


    `]
})
export class HomeComponent implements OnInit{
    fullImagePath: [string];
    
      constructor() {
       
        this.fullImagePath = [('/images/homeparalax/fan1.png'),
                              ('/images/homeparalax/g1.jpg'),
                              ('/images/homeparalax/gf1.png'),
                              ('/images/homeparalax/t1.png')];
      }
    
      ngOnInit() {
      }

}

/*export class HomeComponent {
    

}*/