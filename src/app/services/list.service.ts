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

  remove(id: number){
    return this.http.delete<Movie>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Movie[]>{
      return this.http.get<Movie[]>(this.apiUrl);
  }
}
