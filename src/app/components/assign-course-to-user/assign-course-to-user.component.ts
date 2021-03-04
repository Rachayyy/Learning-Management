import { getLocalePluralCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

export class User {
  constructor(
    public userId: number,
    public userName: string
  ) { }
}

export class Course {
  constructor(
    public courseCode: number,
    public courseName: string
  ) { }
}

class UserCourses {
  constructor(
    public userId: number,
    public userName: string,
    public courseCode: number,
    public courseName: string
  ) { }
}


@Component({
  selector: 'app-assign-course-to-user',
  templateUrl: './assign-course-to-user.component.html',
  styleUrls: ['./assign-course-to-user.component.css']
})
export class AssignCourseToUserComponent implements OnInit {

  constructor(private httpService: HttpserviceService) { }

  public userId: number = 1;
  public userName: string = "Aashray";
  public createDate: Date = new Date();
  public courseName: string = "ABC";
  public courseCode: number = 101


  course: Course[] = [];
  user: User[] = [];
  userCourses: UserCourses;

  isAssigned: boolean = false;
  message: string = "";

  ngOnInit(): void {
    this.getAllCourse();
    this.getAllUser();
    this.isAssigned = false;
  }

  getAllCourse() {
    this.httpService.getCourse().subscribe(result => {
      var i = 0;
      for (var k in result["course"]) {
        // console.log(result["course"][k])
        this.course[i] = new Course(result["course"][k]["courseId"], result["course"][k]["courseName"]);
        // console.log(this.course[i]);
        ++i;
      }
      this.courseName = this.course[0]["courseName"];
    })
  }

  getAllUser() {
    this.httpService.getUser().subscribe(result => {
      var i = 0;
      for (var k in result["user"]) {
        this.user[i] = new User(result["user"][k]["userId"], result["user"][k]["userName"]);
        ++i;
      }
      this.userName = this.user[0]["userName"];
    })
  }

  onCourseSelected() {
    // console.log(this.courseCode)
    for (var k in this.course) {
      // console.log(typeof this.course[k]["courseCode"])
      // console.log(this.course[k]["courseCode"]);
      if (this.course[k]["courseCode"] == this.courseCode) {
        this.courseName = this.course[k]["courseName"];
        break;
      }
    }
  }

  onUserSelected() {
    // console.log(this.courseCode)
    for (var k in this.user) {
      if (this.user[k]["userId"] == this.userId) {
        this.userName = this.user[k]["userName"];
        break;
      }
    }
  }

  assignCourse() {
    // console.log(this.user.userId + " " + this.user.userName + " " + this.user.createDate + " " + this.courseCode + " " + this.courseName)
    this.userCourses = new UserCourses(this.userId, this.userName, this.courseCode, this.courseName);
    this.httpService.update(this.userCourses).subscribe(response => {
      // console.log(response);
      this.isAssigned = true;
      this.message = response["message"]
      console.log(response)
    })
  }

}
