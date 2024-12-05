import { Component, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  
  //  Data type : string , date , boolean , Number
  courseName:string = 'Game developement';
  stateName:string = 'delhi'
  price:Number = 1200;
  inputType = 'checkbox';
  isIndian:boolean = true;
  currentDate:Date =  new Date();
  primaryColor = 'bg-danger'
  


  firstName =  signal('Chetan singh')

  constructor(){

  }



  changeCourse(){
    this.courseName ='Reactjs';
    this.firstName.set('Raman rathore')
  }

  showAlert(message:string){
     alert(message)
  }
  

  
}
