import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-repo',
  templateUrl: './show-repo.component.html',
  styleUrls: ['./show-repo.component.css']
})
export class ShowRepoComponent implements OnInit {

  constructor(private service: GitServiceService,private _snackBar: MatSnackBar) { }
  repoList = [];
  created=false;
  public favourite = {
    "trackId": "",
    "trackName": "",
    "comments": ""
  }
  ngOnInit() {
    this.service.getRepoList().subscribe((data: any) => {
      this.repoList = data;
      console.log(this.repoList);
    })
  }

  saveFavourite(a) {
    this.favourite.trackId = a.id;
    this.favourite.trackName = a.name;
    this.favourite.comments = a.description;
    this.service.saveAsFavourite(this.favourite).subscribe();
    console.log(this.favourite);
    this._snackBar.open('Saved as your', 'favourite' ,{
      duration: 2000,
    });
  }
  openSnackBar() {
    this._snackBar.open('Saved as your', 'favourite' ,{
      duration: 2000,
    });
  }

}
