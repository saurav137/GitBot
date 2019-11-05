import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  public url = '';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token [access key]'
    })
  };
  public httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };
  public httpOptions3 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer [accessKey]'

    })
  };
  public repo = ""
  // httpOptions.headers = this.httpOptions.headers.set('Authorization', '');
  constructor(private http: HttpClient) { }

  getRepoList() {

    return this.http.get(this.url);
  }

  createRepo(body) {
    //  
    console.log('came here')
    return this.http.post(this.url, body);
  }

  deleteRepo(name: string) {

    this.repo = name;
    const url1 = 'https://api.github.com/repos/saurav137/' + name;
    console.log(url1);

  
    return this.http.delete(url1, this.httpOptions);

  }
  saveAsFavourite(a) {
    console.log(a);
    return this.http.post('http://localhost:8080/api/v1/user', a);
  }

  getFavourites(){
    return this.http.get('http://localhost:8080/api/v1/user');
  }
  findIntent(myIntent){
  return this.http.post('https://api.dialogflow.com/v1/query?v=20150910', myIntent, this.httpOptions3);
  }

}
