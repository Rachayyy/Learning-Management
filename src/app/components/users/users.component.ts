import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private httpService: HttpserviceService) { }
   user = [];
  val = [];

   ngOnInit(): void {
    this.getAllUsers();
  }
 getAllUsers(){
     this.httpService.getUser().subscribe((res) => {
       this.user = Object.values(res);
      this.val = Object.values(this.user);
       if(res)
       console.log("ok");
     }, err => console.log("faild"));
 }
}
