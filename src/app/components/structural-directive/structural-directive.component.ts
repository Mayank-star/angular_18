import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router){

  }

  showDiv1(){
    this.isDiv1Visible=true;
  }

  hideDiv1(){
    this.isDiv1Visible=false;
  }

  div2toggle(){
    this.isDiv2Visible=!this.isDiv2Visible
  }

  navigateToAdd(){
      this.router.navigateByUrl('/attribute-directive')
  }

    
}
