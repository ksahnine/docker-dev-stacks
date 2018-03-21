import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  displayedColumns = ['id', 'title', 'description', 'stock'];
  articles:Article[];
  article = new Article();

  constructor(private http: Http) {
    this.articles = [];
  }

  list() {
    //this.http.get('/api/store/articles').subscribe(data => this.articles = data.json());
  }

  add() {
    console.log(this.article);
    //this.http.post('/api/store/articles', this.article).subscribe(ack => this.list());    
  }
}

export class Article {
  constructor() { 
    this.stock = false
  }
  id: number;
  title: string;
  description: string;
  stock: boolean;
}

const ELEMENT_DATA: Article[] = [
  {id: 1, title: 'Hydrogen', description: 'descr', stock: true},
  {id: 2, title: 'Hydrogen', description: 'descr', stock: true},
  {id: 3, title: 'Hydrogen', description: 'descr', stock: true},
  {id: 4, title: 'Hydrogen', description: 'descr', stock: true},
  {id: 5, title: 'Hydrogen', description: 'descr', stock: true}
];