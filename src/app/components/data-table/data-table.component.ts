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
  }
 getAllCourse(){
     this.httpService.getCourse().subscribe((res) => {
       this.course = Object.values(res);
      this.val = Object.values(this.course);
       if(res)
       console.log("ok");
     }, err => console.log("faild"));
 }


}
