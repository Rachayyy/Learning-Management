import { Component, OnInit } from '@angular/core';

class User {
  constructor(
    public userId: number,
    public userName: string,
    public createDate: Date
  ) { }
}

@Component({
  selector: 'app-assign-course-to-user',
  templateUrl: './assign-course-to-user.component.html',
  styleUrls: ['./assign-course-to-user.component.css']
})
export class AssignCourseToUserComponent implements OnInit {

  constructor() { }

  public userId: number = 1;
  public userName: string = "Aashray";
  public createDate: Date = new Date();
  public courseName: string = "ABC";
  public courseCode: number;
  public courses: number[] = [
    101, 102, 103, 104, 405, 106, 107
  ];

  user: User = new User(this.userId, this.userName, this.createDate);
  

  ngOnInit(): void {
    console.log("Hello")
  }

  assignCourse() {
    console.log(this.user.userId + " " + this.user.userName + " " + this.user.createDate + " " + this.courseCode + " " + this.courseName)
  }

}
