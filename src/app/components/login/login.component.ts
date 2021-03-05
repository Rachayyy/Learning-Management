import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private httpService: HttpserviceService
  ) { }

   public userName: string;
   public pass: string;
   public value:string;
  

  ngOnInit(): void {
  }
   
  public LoginUser(){
    // var login = {
    //   username: this.userName,
    //   password: this.pass,
    //   userType: this.value
    // }
    // this.httpService.validateLogin(login).subscribe(response => {
    //   console.log(response);
    // });
    console.log(this.userName + " " + this.pass + " " + this.value)
    if (this.value == "admin"){
     if(this.userName == "Admin" && this.pass == "1234"){
        alert('login successful!!');
        this.router.navigate(['/dashboard']);
     }
     else{
      alert('username or password is wrong');
     }
    }

    if(this.value == "user"){
      if(this.userName == "tcs" && this.pass == "1234"){
        alert('login successful!!');
        this.router.navigate(['/userdashboard']);
     }
     else{
      alert('username or password is wrong');
     }
    }
  }

  onItemChange(value1){
      this.value = value1;
  }
}
