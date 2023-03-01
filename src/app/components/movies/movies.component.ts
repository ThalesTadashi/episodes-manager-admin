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
    this.movies = this.movies.filter((a) => movie.name !== a.name);
    this.ListService.remove(movie.id).subscribe();
  }

  getMovies() {
    this.ListService.getAll().subscribe((movies) => (this.movies = movies));
  }
}
