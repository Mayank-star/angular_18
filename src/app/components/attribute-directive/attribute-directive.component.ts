import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1Color='bg-info';
  div2Color:boolean=true;

  usertable : any[]=[
    {
      firstName:'raman',
      lastName:'singh',
      gender:'male',
      totalMarks:23,
      isActive:true,
    },
    {
      firstName:'sanam',
      lastName:'jha',
      gender:'female',
      totalMarks:55,
      isActive:true,
    },
    {
      firstName:'riya',
      lastName:'jain',
      gender:'male',
      totalMarks:93,
      isActive:false,
    },
    {
      firstName:'kamal',
      lastName:'singh',
      gender:'male',
      totalMarks:93,
      isActive:true,
    },
    {
      firstName:'neetu',
      lastName:'singh',
      gender:'male',
      totalMarks:63,
      isActive:false,
    },

  ]

  customStyle:any={
      'width':'330px',
      'height':'400px',
      'background-color':'red'
  }



   changeToRed(){
     this.div1Color ='bg-danger';
   }

   changeToBlue(){
    this.div1Color ='bg-primary';
   }

   toggleDiv2State(){
    this.div2Color=!this.div2Color
   }
 

}
