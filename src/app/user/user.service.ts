import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }
}
