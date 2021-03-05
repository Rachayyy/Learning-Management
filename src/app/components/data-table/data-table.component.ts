import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor(private httpService: HttpserviceService) { }
  course = [];
  val = [];

  ngOnInit(): void {
    this.getAllCourse();

    //delete course
    // this.deleteCourseById(5); 

    //update course title
    // var data = {
    //   courseId: 9,
    //   courseName: "Python"
    // }
    
    // this.httpService.updateCourseTitle(data).subscribe(res=>{
    //   console.log(res);
    // })
  }

  deleteCourseById(courseId) {
    //if (row deleted == true) then return 1 otherwise return 0;
    this.httpService.deleteCourseById(courseId).subscribe(res=>{
      console.log(res);
    })
  }

  getAllCourse() {

    //use this method
    this.httpService.getAllCourseDetails().subscribe(res=> {
      console.log(res);
    })


    // this.httpService.getCourse().subscribe((res) => {
    //   this.course = Object.values(res);
    //   this.val = Object.values(this.course);
    //   if(res)
    //   console.log("ok");
    // }, err => console.log("faild"));
  }




}
