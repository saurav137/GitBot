import { Component, OnInit } from '@angular/core';
import { GitServiceService } from './git-service.service';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GitBot';
  constructor(private service: GitServiceService, private router: Router,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
  repoList = [];
  intentType: string = "";
  public body = {
    "name": "",
    "description": " "
  };

  public favourite = {
    "trackId": "",
    "trackName": "",
    "comments": ""
  }

  public myIntent = {
    "contexts": [
      "shop"
    ],
    "lang": "en",
    "query": "",
    "sessionId": "12345",
    "timezone": "America/New_York"
  }
  ngOnInit() {
    this.service.getRepoList().subscribe((data: any) => {
      this.repoList = data;
      console.log(this.repoList);
    })
  }
  onClick(name, msg) {
    this.body.name = name;
    this.body.description = msg;
    this.service.createRepo(this.body).subscribe();
  }
  toDelete(name: string) {
    this.service.deleteRepo(name).subscribe();
  }
  queryIntent(query,content) {
    console.log(query);
    this.myIntent.query = query;
    this.service.findIntent(this.myIntent).subscribe((data: any) => {

      this.intentType = data.result.metadata.intentName;
      console.log(this.intentType);
      if (this.intentType == 'CreateRepo') {
        console.log('create')
        this.router.navigateByUrl('/repoCreation')
      } else if(this.intentType=='DeleteRepo') {
        this.router.navigateByUrl('/deleteRepo')
      }
      else if(this.intentType=='repoList'){
        this.router.navigateByUrl('/repoList')
      }
      else{
        this.modalService.open(content);
      }
      
    })

   
  } 

}
