import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../components/add-courses/add-courses.component';

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

  public create(data: Course) {
    // console.log(data + " " + (baseUrl+path))
    var path = 'addCourses';
    
    return this.http.post(`${baseUrl}/${path}`, data);
  }

  public update(username: string, data) {
    return this.http.put(`${baseUrl}/${username}`, data);
  }

  

}
