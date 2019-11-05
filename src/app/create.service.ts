import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http:HttpClient) { }

  createRepo() {

    return this.http.get('https://api.github.com/users/saurav137/repos');
   }
}
