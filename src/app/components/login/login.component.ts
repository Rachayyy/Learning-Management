import { Component, OnInit } from '@angular/core';

class User {
  constructor(
    public userName: string
  ) { }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public userName: string = "Aashray";
  user: User = new User(this.userName);
  

  ngOnInit(): void {
  }

}
