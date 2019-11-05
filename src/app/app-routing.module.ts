import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { ShowRepoComponent } from './show-repo/show-repo.component';
import { CreateRepoComponent } from './create-repo/create-repo.component';
import { DeleteRepoComponent } from './delete-repo/delete-repo.component';


const routes: Routes = [
  {path: 'favourites', component: FavouritesComponent},
  {path: 'repoList',component:ShowRepoComponent},
  {path: 'repoCreation',component:CreateRepoComponent},
  {path: 'deleteRepo',component:DeleteRepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
