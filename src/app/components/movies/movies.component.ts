import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  constructor(private ListService: ListService) {
    this.getMovies()
  }
  movies: Movie[] = [];
  name: string = '';

  ngOnInit(): void {
    this.getMovies();
  }
  removeMovie(movie: Movie) {
    this.movies = this.ListService.remove(this.movies, movie)
  }

  getMovies() {
    this.ListService.getAll().subscribe((movies) => (this.movies = movies));
  }
}
