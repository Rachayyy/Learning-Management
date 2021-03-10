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

  //use these methods for user and course work

  //all course details
  public getAllCourseDetails() {
    var path = 'getAllCourseDetails';
    return this.http.get(`${baseUrl}/${path}`).pipe(map(res => {
      return res;
    }))
  }

  //delete course from db
  public deleteCourseById(courseId) {
    var path = 'deleteCourseById';
    return this.http.delete(`${baseUrl}/${path}/${courseId}`);
  }

  //editCourseTitle
  public updateCourseTitle(data) {
    var path = 'editTitleOfCourse';
    var dataString = JSON.parse(JSON.stringify(data || null));
    return this.http.put(`${baseUrl}/${path}`, dataString);
  }
  
  //user methods
  //get all user details
  public getAllUserDetails() {
    var path = 'getAllUserDetails';
    return this.http.get(`${baseUrl}/${path}`).pipe(map(res => {
      return res;
    }))
  }

  //add new user
  public addNewUser(data) {
    var path = 'addNewUser';
    let dataString = JSON.parse(JSON.stringify(data || null));
    return this.http.post(`${baseUrl}/${path}`, dataString);
  }


  //delete course from db
  public deleteUserById(userId) {
    var path = 'deleteUserById';
    return this.http.delete(`${baseUrl}/${path}/${userId}`);
  }


  public getUserById(userId) {
    var path = 'getUserById';
    return this.http.get(`${baseUrl}/${path}/${userId}`);
  }

  public getUserCourses(userId) {
    var path = 'getUserCourses';
    return this.http.get(`${baseUrl}/${path}/${userId}`);
  }

  public searchCourse(title) {
    var path = 'searchCourse';
    return this.http.get(`${baseUrl}/${path}/${title}`);
  }

  public getCourseById(courseId) {
    var path = 'getCourseById';
    return this.http.get(`${baseUrl}/${path}/${courseId}`);
  }
  //editUser
  public updateUser(data) {
    var path = 'editUser';
    var dataString = JSON.parse(JSON.stringify(data || null));
    return this.http.put(`${baseUrl}/${path}`, dataString);
  }

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

  public update(data) {
    var path = 'updateUserCourse'
    var dataString = JSON.parse(JSON.stringify(data || null));
    return this.http.put(`${baseUrl}/${path}/${data.userId}/${data.courseCode}`, dataString);
  }



  public validateLogin(data) {
      var path = 'validateLogin';
      var dataString = JSON.parse(JSON.stringify(data || null));
      return this.http.post(`${baseUrl}/${path}`, dataString);
  }
  

}
