import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {
   
  isIfBlockVisible:boolean=true;

  ifStyles:any= {
      'width':'300px',
      'height':'100px',
      'border':'2px solid red',
      'background-color':'orange',
      
  }
  show(){
    this.isIfBlockVisible=true
  }

  hide(){
    this.isIfBlockVisible=false
  }

}
