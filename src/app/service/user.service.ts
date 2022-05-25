import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  searchUser(user: string): Observable<any> {
    // return this.http.get<any>(`http://localhost:3000/user`)
    return this.http.get<any>(`https://api.github.com/users/${user}`)
  }

  getRepositorios(user: string): Observable<any> {
    // return this.http.get(`http://localhost:3000/repos`)
    return this.http.get<any>(`https://api.github.com/users/${user}/repos?per_page=4`)
  }
}
