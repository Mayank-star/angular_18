import { Component } from '@angular/core'; 
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18';
}
