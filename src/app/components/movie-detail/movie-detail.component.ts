import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movie';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit{
  movie?: Movie

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
  ) { 
    this.getMovie();
  }

  ngOnInit(){

  }

  getMovie(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((movie) => (this.movie = movie));
  }

}
