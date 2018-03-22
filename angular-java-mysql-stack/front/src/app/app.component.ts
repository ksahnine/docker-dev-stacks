import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  displayedColumns = ['id', 'title', 'description', 'available', 'action'];
  articles:Article[];
  article = new Article();

  constructor(private http: Http) {
    //this.articles = [];
    this.list();
  }

  list() {
    this.http.get('/api/store/articles').subscribe(data => this.articles = data.json());
  }

  add() {
    this.http.post('/api/store/articles', this.article).subscribe(ack => this.list());    
  }
}

export class Article {
  constructor() { 
    this.available = false
  }
  id: number;
  title: string;
  description: string;
  available: boolean;
}

const ELEMENT_DATA: Article[] = [
  {id: 1, title: 'Hydrogen', description: 'descr', available: true},
  {id: 2, title: 'Hydrogen', description: 'descr', available: true},
  {id: 3, title: 'Hydrogen', description: 'descr', available: true},
  {id: 4, title: 'Hydrogen', description: 'descr', available: true},
  {id: 5, title: 'Hydrogen', description: 'descr', available: true}
];