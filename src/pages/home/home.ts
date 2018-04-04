import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

export interface Result {
  title: string;
  author: string;
  date: string;
  image: string;
}

const fakeResult: Result[] = [
  { title: 'Michel', author: 'Notre ami Michel !', date: '14/02/1953', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Michel_Cremades.jpg/220px-Michel_Cremades.jpg"},
  { title: 'RRRRRRRRRRRr', author: 'Alain Chabat', date: '15/12/1984', image: 'https://media.senscritique.com/media/000004673929/1200/RRRrrrr.jpg'},
  { title: 'Michel', author: 'Notre ami Michel !', date: '14/02/1953', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Michel_Cremades.jpg/220px-Michel_Cremades.jpg" },
  { title: 'RRRRRRRRRRRr', author: 'Alain Chabat', date: '15/12/1984', image: 'https://media.senscritique.com/media/000004673929/1200/RRRrrrr.jpg' },
  { title: 'Michel', author: 'Notre ami Michel !', date: '14/02/1953', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Michel_Cremades.jpg/220px-Michel_Cremades.jpg" },
  { title: 'RRRRRRRRRRRr', author: 'Alain Chabat', date: '15/12/1984', image: 'https://media.senscritique.com/media/000004673929/1200/RRRrrrr.jpg' }
]


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: Result[];

  constructor(public navCtrl: NavController) {
    this.results = fakeResult;
  }

  getLength(event: any){
    return event.length;


  }
}
