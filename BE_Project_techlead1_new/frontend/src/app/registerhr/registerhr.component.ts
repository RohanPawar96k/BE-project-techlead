import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registerhr',
  templateUrl: './registerhr.component.html',
  styleUrls: ['./registerhr.component.css']
})
export class RegisterhrComponent {
  firstname: string ="";
  lastname: string ="";
  company: string ="";
  email: string ="";
  password: string ="";
  constructor(private http: HttpClient) 
  {
  }
  ngOnInit(): void
  {

  }
  
  registerhr()
  {
    let bodyData = 
    {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "company" : this.company,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:8086/student/createhr",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("HR Registered Successfully")
        location.href="/loginhr"
    });
  }
  save()
  {
    this.registerhr();
  }
}
