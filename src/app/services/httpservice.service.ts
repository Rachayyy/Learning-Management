import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/LMP';

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

  public create(data) {
    return this.http.post(baseUrl, data);
  }

  public update(username: string, data) {
    return this.http.put(`${baseUrl}/${username}`, data);
  }

}
