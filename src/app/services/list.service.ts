import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/movies'

  constructor(private http: HttpClient) { }

  remove(movies: Movie[], movie: Movie){
    return movies.filter((a) => movie.name !== a.name);
  }

  getAll(): Observable<Movie[]>{
      return this.http.get<Movie[]>(this.apiUrl);
  }
}
