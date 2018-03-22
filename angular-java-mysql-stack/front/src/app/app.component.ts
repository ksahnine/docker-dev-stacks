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
    //this.articles = ELEMENT_DATA;
    this.list();
  }

  list() {
    this.http.get('/api/store/articles').subscribe(data => this.articles = data.json());
  }

  add() {
    this.http.post('/api/store/articles', this.article).subscribe(ack => this.list());    
  }

  delete(articleId) {
    this.http.delete(`/api/store/articles/${articleId}`).subscribe(ack => this.list());    
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
