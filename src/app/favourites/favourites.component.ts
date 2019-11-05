import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';


@Component({
  selector: 'app-favourites',
  template: `
  <div class="container">
  <div class="row card-deck">
  <div *ngFor="let a of favList">
   
        <div class="col-lg-6">
      <div class="card" style="width: 18rem;">
        <img src="https://source.unsplash.com/user/erondu/200x300" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{a.trackName}}</h5> 
           </div>
      </div>
      </div>
    </div>
  </div>
  </div>
  `,
  styles: []
})
export class FavouritesComponent implements OnInit {
   
  constructor(private service: GitServiceService) { }
  favList= [];

  ngOnInit() {
    this.service.getFavourites().subscribe((data: any) => {
      this.favList = data;
      console.log(this.favList);
  } )
  }

}
