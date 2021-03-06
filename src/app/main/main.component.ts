import { Component, OnInit } from "@angular/core";
import { MovieServiceService } from "../services/movie-service.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  
  constructor(private movieService: MovieServiceService) {}

  ngOnInit() {
    this.searchResults = this.movieService.getSearchResults();
    this.myMovieList = this.movieService.getMovieList();
    this.movieService.loadMovieList();
  }

  searchResults = [];
  myMovieList = [];
  title = "Angular Flix";

}