import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    constructor(private servoce:ApiService)
    {
      
    }
}
