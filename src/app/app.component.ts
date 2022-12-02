import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!:FaceSnap[];
 
  ngOnInit() {
    this.faceSnaps = [
      {
       title:'Mon beau Pays',
        description:'Mon meilleur ami depuis tout petit !',
         createdDate:new Date(),
         imageUrl:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
       snaps: 0,
       location:'Dakar ',

      },
      {
        title:'Mon beau Pays',
         description:'Mon meilleur ami depuis tout petit !',
          createdDate:new Date(),
          imageUrl:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        snaps: 0,
        location:'Dakar ',
 
       },
  
 {
      title: ' Archibald ',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate:  new Date(),
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      snaps:  0,
    },
    {
      title: ' Archibald ',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate:  new Date(),
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      snaps:  0,
    },

  
    
    {
      title:'Ma nature ',
      description:'Mon meilleur ami depuis tout petit !',
       createdDate :new Date(),
       imageUrl:'https://cdn.pixabay.com/photo/2022/11/20/20/43/fall-7605210_960_720.jpg',
      snaps:0,
      location:'Dakar'
      
    },
    {
      title:'Ma nature ',
      description:'Mon meilleur ami depuis tout petit !',
       createdDate :new Date(),
       imageUrl:'https://cdn.pixabay.com/photo/2022/11/20/20/43/fall-7605210_960_720.jpg',
      snaps:120,
      location:'Dakar'
      
    },
    ];
  }
}