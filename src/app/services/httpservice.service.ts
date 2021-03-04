import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../components/assign-course-to-user/assign-course-to-user.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResolveStart } from '@angular/router';



const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(baseUrl);
  }

  public get(username: string) {
    return this.http.get(`${baseUrl}/${username}`);
  }

  public update(username: string, data) {
    return this.http.put(`${baseUrl}/${username}`, data);
  }


  //Aashray work.(These are working methods. )

  //assign course button
  public getCourse() {
    var path = 'getAllCourse';
    return this.http.get(`${baseUrl}/${path}`).pipe(map(res => {
      return res;
    }));
  }

  //assign course button
  public getUser() {
    var path = 'getAllUser';
    return this.http.get(`${baseUrl}/${path}`).pipe(map(res=>{
      return res;
    }));
  }

  public create(data) {
    // console.log(data + " " + (baseUrl+path))
    var path = 'addCourses';
    
    // var formData = new FormData();
    // formData.append('document', data.document, data.document.name);
    // data.convertedDocumnet = formData;
    // console.log(formData);
    let dataString = JSON.parse(JSON.stringify(data || null));
    return this.http.post(`${baseUrl}/${path}`, dataString)
  }

  
  

}
