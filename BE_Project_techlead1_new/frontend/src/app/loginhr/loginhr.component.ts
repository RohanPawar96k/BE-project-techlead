import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginhr',
  templateUrl: './loginhr.component.html',
  styleUrls: ['./loginhr.component.css']
})
export class LoginhrComponent {
  email: string = '';
  password: string = '';

  isLogin: boolean = true;
  erroMessage: string = "";

  constructor(private router: Router,private http: HttpClient) {}

  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };

        this.http.post("http://localhost:8086/student/loginhr", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);

        if (resultData.status) 
        {
          alert("Login Sucessfully");
          this.router.navigate(['/']);
          
        } 
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }

      });
    }

}
