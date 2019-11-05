import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';


@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent implements OnInit {

  public body={
    "name" : "",
    "description":" "
  };

  created = false;
  constructor(private service: GitServiceService) { }

  ngOnInit() {
  }
  onClick(name,msg) {
    console.log('came in createRepo')
    this.body.name=name;
    this.body.description=msg;
    this.service.createRepo(this.body).subscribe((data: any) => {
     
      console.log(data);
      if (data) {
        this.created = true
        setTimeout(() => {
          this.created = false
        }, 3000);
      }
  }, (err) => {
    console.log(err, "this is the error")
  });
  }

}
