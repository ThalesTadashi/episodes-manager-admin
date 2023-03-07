import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: MainComponent,
    children: [
  
        {path: 'home', component: HomeComponent},

        {path: 'logout', component: LogoutComponent},

        {path: 'users', component: UsersComponent},

        {path: 'movies', component: MoviesComponent},

        {path: 'user-detail/:id', component: UserDetailComponent},

        {path: 'movie-detail/:id', component: MovieDetailComponent},
 
    ],
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
