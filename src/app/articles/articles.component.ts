import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    articles : Article[];
  constructor(private articleService: ArticleService ) {
  		this.articleService.getArticles()
  			.subscribe(articles => {
  				this.articles = articles;
  			});
   }

  ngOnInit() {
  }

}
