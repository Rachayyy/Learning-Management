import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(private httpService: HttpserviceService,private route: ActivatedRoute,private router: Router) { 
    this.id = this.route.snapshot.params.id;
   }

 id: number;
 user = [];
 val = [];
 public courseId: number ;
 public courseCode: number ;
  public courseName: string ;
  public createDate: Date = new Date();
  public cValue = formatDate(this.createDate, 'yyyy-MM-dd', 'en-US');

  ngOnInit(): void {
    this.viewRow(this.id);
  }

  viewRow(id){
    this.httpService.getCourseById(id).subscribe((res) =>{
     this.user = Object.values(res);
     this.val = Object.values(this.user);
     this.courseId = this.id;
     this.courseCode = this.val[0][0].courseCode;
     this.courseName = this.val[0][0].courseName;
     console.log(this.val);
    })
  }

  update(){
    var course = {
      courseId : this.courseId,
     courseName: this.courseName,
      creationDate: this.cValue.toString()
    }
    this.httpService.updateCourseTitle(course).subscribe((res) =>{
      this.router.navigate(['/showAllCourses']);
    })
  }


}
