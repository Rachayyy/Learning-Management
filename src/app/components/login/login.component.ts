import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

   public userName: string;
   public pass: string;
   public value:string;
  

  ngOnInit(): void {
  }
   
  LoginUser(){
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
      
    }
  }

  onItemChange(value1){
      this.value = value1;
  }
}
