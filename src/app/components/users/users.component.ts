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

  getAllUsers() {
    this.httpService.getAllUserDetails().subscribe((res)=> {
      console.log(res);
      this.user = Object.values(res);
    this.val = Object.values(this.user);
    });
    
  }


 deleteRow(id){
  for(let i = 0; i<this.val[0].length; ++i)
  {
    if(this.val[0][i].userId === id){
      this.httpService.deleteUserById(id).subscribe((res) =>{
        alert("User Deleted");
        this.getAllUsers();
      })
    }
  }
}



}


