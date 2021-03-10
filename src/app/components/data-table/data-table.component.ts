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
  search: string;

  ngOnInit(): void {
    this.getAllCourse();
  } 

  getAllCourse() {

    //use this method
    this.httpService.getAllCourseDetails().subscribe((res)=> {
      console.log(res);
      this.course = Object.values(res);
      this.val = Object.values(this.course);
    })
    
  }
  hideRow(id){
    for(let i = 0; i<this.val[0].length; ++i)
    {
      if(this.val[0][i].courseId === id){
        this.val[0].splice(i,1);
      }
    }
  }

  deleteRow(id){
    for(let i = 0; i<this.val[0].length; ++i)
    {
      if(this.val[0][i].courseId === id){
        this.httpService.deleteCourseById(id).subscribe((res) =>{
          alert("Course Deleted");
          this.getAllCourse();
        })
      }
    }
  }

  searchcourse(){
    alert(this.search);
  }




}
