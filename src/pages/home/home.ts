import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { api_key } from "../../app/tmdb";

export interface Result {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: Observable<Result[]>;


  constructor(public navCtrl: NavController,public http: HttpClient) {
    this.results = Observable.of([]);
  }

  getItems(event: any) : void{
    let val = event.target.value;
    if (val.length == 0) {
      this.results = Observable.of([]);
    }
    else {
      this.results = this.fetchResults(val);
    }
  }

  showDetails(item: Result) : void{
    this.navCtrl.push(DetailsPage,item);
  }

  fetchResults(query: string) : Observable<Result[]>{

    return this.http.get<Result[]>("https://api.themoviedb.org/3/search/movie",{
      params:{
        "api_key": api_key,
        "query": query
      }
    }).pluck("results");
  }

}
