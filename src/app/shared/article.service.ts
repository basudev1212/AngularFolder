import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Article} from './article.model';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
	selectedArticle: Article;
	articles: Article[];

  constructor(private http:HttpClient) {
  		console.log('Article Service Initialized');
  	 }
  	 getArticles(){
  	 	return this.http.get('http://localhost:3000/assessment/category1')
  	 		.map((res: any) => res);
  	 }
}
