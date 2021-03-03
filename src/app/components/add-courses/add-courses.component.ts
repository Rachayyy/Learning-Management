import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
// ng2-file-upload is used for uploading file from form
import { FileUploader } from 'ng2-file-upload';

// Course class is used to bind the data from add course form.
export class Course {

  constructor (
    public courseId: number,
    public courseCode: number,
    public courseName: string,
    public document: FileUploader
  ) {}
}

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})


export class AddCoursesComponent implements OnInit {

  constructor(private httpService: HttpserviceService) { }

  courseId: number = 1;
  courseName: string = "Aashray";
  courseCode: number = 101;
  // document: FileUploader = new FileUploader({
  //   url: "",
  //   removeAfterUpload: false,
  //   autoUpload: true
  // });

  document: any = null;
  
  course: Course = new Course(this.courseId, this.courseCode, this.courseName,  this.document);

  ngOnInit(): void {
    console.log("inside addcourse");
    
  }

  public addNewCourse() {
    // console.log(this.course.courseId + " " + this.course.courseCode + " " + this.course.courseName + " " + this.course.document)
    this.httpService.create(this.course).subscribe(
      response => {
        console.log(response);
      }, 
      error => {
        console.log(error);
      }
    )
  }

}
