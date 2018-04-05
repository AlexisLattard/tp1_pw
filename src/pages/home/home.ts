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
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    this.results = fakeResult;
    this.initializeItems();
  }

  initializeItems() {
    this.items = ['Test1', 'Test2'];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
