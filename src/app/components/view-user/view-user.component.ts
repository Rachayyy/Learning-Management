import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
id: number;
  constructor(private httpService: HttpserviceService,private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.viewcourses(this.id)
  }
user = [];
val = [];
  viewcourses(id){
    this.httpService.getUserCourses(id).subscribe((res) =>{
      this.user = Object.values(res);
      this.val = Object.values(this.user);
      console.log(this.val);
     })
  }

}
