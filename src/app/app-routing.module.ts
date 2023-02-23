import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: MainComponent,
    children: [
  
        {path: 'users', component: UsersComponent},

        {
            path: 'movies', component: MoviesComponent},
 
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
