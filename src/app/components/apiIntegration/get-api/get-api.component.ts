import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MyButtonComponent } from '../../reusableComponent/my-button/my-button.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [MyButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:any [] = [];

  constructor(private http : HttpClient){
    
  }

  getAllUsers(){
     this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>{
      this.userList =  result
     })
  }

  onHit(data:any){
     alert(data)
  }


}
