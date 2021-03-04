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
      // for (let i of this.val.values()){
      //   for (var j =0;j< i.length;j++)
      //           console.log(i[j].userId);
      //  }
      //  this.arr = Object.keys(this.user).map(key => ({type: key, value: this.user[key]}));
      //  console.log(this.arr);
       if(res)
       console.log("ok");
      console.log(this.val.values());
     }, err => console.log("faild"));
 }
}
