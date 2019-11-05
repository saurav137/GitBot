import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRepoComponent } from './create-repo/create-repo.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ShowRepoComponent } from './show-repo/show-repo.component';
import { DeleteRepoComponent } from './delete-repo/delete-repo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    CreateRepoComponent,
    FavouritesComponent,
    ShowRepoComponent,
    DeleteRepoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
  MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


