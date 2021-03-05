import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { ActivatedRoute, Params } from '@angular/router';
import { formatDate } from '@angular/common';

// export class User {
//   constructor(
//     public userId: number,
//     public userName: string
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

  constructor(private httpService: HttpserviceService,private route: ActivatedRoute) { 
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
  // public courseName: string ;
  // public courseCode: number;


  // course: Course[] = [];
  // user1: User[] = [];
  // userCourses: UserCourses;

  // isEdited: boolean = false;
  // message: string = "";


  ngOnInit(): void {
  //   this.sub = this.route.params.subscribe((params:Params) => {
  //     this.id = +params['id'];
      
  // });
  this.viewRow(this.id);
  //console.log(this.id);
}

  
  // getAllCourse() {
  //   this.httpService.getCourse().subscribe(result => {
  //     var i = 0;
  //     for (var k in result["course"]) {
  //       // console.log(result["course"][k])
  //       this.course[i] = new Course(result["course"][k]["courseId"], result["course"][k]["courseName"]);
  //       // console.log(this.course[i]);
  //       ++i;
  //     }
  //     this.courseName = this.course[0]["courseName"];
  //   })
  // }

  // getAllUser() {
  //   this.httpService.getUser().subscribe(result => {
  //     var i = 0;
  //     for (var k in result["user"]) {
  //       this.user[i] = new User(result["user"][k]["userId"], result["user"][k]["userName"]);
  //       ++i;
  //     }
  //     this.userName = this.user[0]["userName"];
  //   })
  // }

  // onCourseSelected() {
  //   // console.log(this.courseCode)
  //   for (var k in this.course) {
  //     // console.log(typeof this.course[k]["courseCode"])
  //     // console.log(this.course[k]["courseCode"]);
  //     if (this.course[k]["courseCode"] == this.courseCode) {
  //       this.courseName = this.course[k]["courseName"];
  //       break;
  //     }
  //   }
  // }

  // onUserSelected() {
  //   // console.log(this.courseCode)
  //   for (var k in this.user) {
  //     if (this.user[k]["userId"] == this.userId) {
  //       this.userName = this.user[k]["userName"];
  //       break;
  //     }
  //   }
  // }

  // EditUser() {
  //   // console.log(this.user.userId + " " + this.user.userName + " " + this.user.createDate + " " + this.courseCode + " " + this.courseName)
  //   this.userCourses = new UserCourses(this.userId, this.userName, this.courseCode, this.courseName);
  //   this.httpService.update(this.userCourses).subscribe(response => {
  //     // console.log(response);
  //     this.isEdited = true;
  //     this.message = response["message"]
  //     console.log(response)
  //   })
  // }
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
   


}
