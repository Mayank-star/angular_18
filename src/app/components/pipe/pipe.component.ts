import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [ AsyncPipe, JsonPipe, UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName='ready to go'
   date = new Date();
   currentTime:Observable<Date> =  new Observable<Date>

   student:any = {
    name:'chetan',
    city:'pune',
    empId:344
  }

  constructor(){
    this.currentTime= interval(1000).pipe(map(()=>new Date()))
  }

}
