import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule ,JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  formData:any = {
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zip:'',
    isAcceptTerms:false
  }

  formValue:any;

  onSubmit(){
      this.formValue=this.formData
  }

  onReset(){
    this.formData = {
      firstName:'',
      lastName:'',
      userName:'',
      city:'',
      state:'',
      zip:'',
      isAcceptTerms:false
    }
  }

}
