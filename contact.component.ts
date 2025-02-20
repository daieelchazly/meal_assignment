import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

    // Define properties to bind with the form inputs
    userName: string = '';
    userAge: string = '';
    userEmail: string = '';
    userPassword: string = '';
  
}
