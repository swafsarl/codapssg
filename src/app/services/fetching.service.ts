import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const fetchingApiRoot = `https://653e3318f52310ee6a9aad19.mockapi.io`;

export interface Article {
  id: string;
  createdAt: Date;
  title: string;
  content: string;
  createdBy: string;
  avatarImgUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class FetchingService {
  private httpClient = inject(HttpClient);

  getBlogList(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${fetchingApiRoot}/articles`);
  }

  getBlogDetail(articleId: string): Observable<Article> {
    return this.httpClient.get<Article>(
      `${fetchingApiRoot}/articles/${articleId}`
    );
  }
}
