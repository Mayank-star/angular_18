import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible:boolean=false;
  isDiv2Visible:boolean=true;
  cityArray :string [] = ['delhi','singapore','mumbai']

  showDiv1(){
    this.isDiv1Visible=true;
  }

  hideDiv1(){
    this.isDiv1Visible=false;
  }

  div2toggle(){
    this.isDiv2Visible=!this.isDiv2Visible
  }

    
}
