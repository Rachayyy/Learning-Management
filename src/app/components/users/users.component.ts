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
 hideRow(id){
   for(let i = 0; i<this.val[0].length; ++i)
   {
     if(this.val[0][i].userId === id){
       this.val[0].splice(i,1);
     }
   }
 }
}

