import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
})
export class UserRegistrationComponent {
  registerObj: Registration;
  registrationMessage: string;

  constructor(private http: HttpClient) {
    this.registerObj = new Registration();
    this.registrationMessage = ' ';
  }

  Onsubmit() {
    debugger;
    console.log('User profile succesfully created !!');
    console.log(`Username: ${this.registerObj.username}`);
    console.log(`email: ${this.registerObj.email}`);
    console.log(`password: ${this.registerObj.password}`);
  }
}

export class Registration {
  
  username: string;
  email: string;
  password: string;

  constructor() {
    this.username = ' ',
    this.email = ' ',
    this.password = ' '
  }
}
