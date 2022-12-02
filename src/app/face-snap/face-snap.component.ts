import { Component ,OnInit,Input} from '@angular/core';
import  { FaceSnap} from '../Models/face-snap.model';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  
  @Input() 
  faceSnap!: FaceSnap;
  
  buttonText!:string;
 //Ajout des données 
ngOnInit() {
 

}
onSnap() {
  if (this.buttonText === 'Oh Snap!') {
    this.faceSnap.snaps++;
    this.buttonText = 'Oops, unSnap!';
  } else {
    this.faceSnap.snaps--;
    this.buttonText = 'Oh Snap!'
  }
}
}
