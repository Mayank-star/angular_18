import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  studentForm:FormGroup= new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName:new FormControl(),
    userName:new FormControl('some@123'),
    city:new FormControl(),
    state:new FormControl(),
    zipcode:new FormControl(),
    isAcceptTerms:new FormControl()
  })
 
  formValue:any;

  onSave(){
    this.formValue =  this.studentForm.value
  }

}