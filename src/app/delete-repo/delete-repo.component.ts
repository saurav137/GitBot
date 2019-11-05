import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';


@Component({
  selector: 'app-delete-repo',
  templateUrl: './delete-repo.component.html',
  styleUrls: ['./delete-repo.component.css']
})
export class DeleteRepoComponent implements OnInit {

  constructor(private service: GitServiceService) { }

  ngOnInit() {
  }
  
  toDelete(name:string){
    this.service.deleteRepo(name).subscribe();
  }

}
