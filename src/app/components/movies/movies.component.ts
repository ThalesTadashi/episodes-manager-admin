import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{

  movies = [];

  ngOnInit(): void{
    this.getMovies();
  }

  getMovies(){
   
  }
}
