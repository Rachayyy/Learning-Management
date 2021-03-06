import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { formatDate } from '@angular/common';

// class User {
//   constructor(
//     public userId: number,
//     public userName: string,
//     public creation_date: string
//   ) { }
// }

// export class Course {
//   constructor(
//     public courseCode: number,
//     public courseName: string
//   ) { }
// }

// class UserCourses {
//   constructor(
//     public userId: number,
//     public userName: string,
//     // public courseCode: number,
//     // public courseName: string
//   ) { }
// }

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  

  constructor(private httpService: HttpserviceService,private route: ActivatedRoute,private router: Router) { 
    this.id = this.route.snapshot.params.id;
    
  }
  user = [];
  val = [];
 sub: any;
 id : number;

 
  public userId: number ;
  public userName: string ;
  public createDate: Date = new Date();
  public cValue = formatDate(this.createDate, 'yyyy-MM-dd', 'en-US');

  ngOnInit(): void {
  //   this.sub = this.route.params.subscribe((params:Params) => {
  //     this.id = +params['id'];
      
  // });
  this.viewRow(this.id);
  //console.log(this.id);
}

  viewRow(id){
        this.httpService.getUserById(id).subscribe((res) =>{
         //alert("User Viewed");
         this.user = Object.values(res);
         this.val = Object.values(this.user);
         this.userId = this.val[0][0].userId;
         this.userName = this.val[0][0].userName;
         console.log(this.val[0][0]);
        })
      }
   
      update(){
        var user = {
          userId : this.userId,
          userName: this.userName,
          creation_date: this.cValue.toString()
        }
        this.httpService.updateUser(user).subscribe((res) =>{
          this.router.navigate(['/users']);
        })
      }


}
