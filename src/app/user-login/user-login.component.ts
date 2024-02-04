import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'Login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})

export class UserLoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient) {
    this.loginObj = new Login();
  }

  onLogin()
  {
    debugger;
    console.log('Login form submitted!');
    console.log(`username: ${this.loginObj.username}`);
    console.log(`password: ${this.loginObj.password}`);
  }
}

export class Login {

  username: string;
  password: string;

  constructor() {
    this.username = ' ',
    this.password = ' '
  }
  
}

