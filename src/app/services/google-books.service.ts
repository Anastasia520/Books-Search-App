import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

import { IKind } from '../models/kind.model';
import { IBook } from '../models/book.model';

@Injectable()
export class GoogleBooksService {
  private readonly GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1';

  constructor(private http: HttpClient) {}

  searchBooks(searchTerm: string): Observable<IBook[]> {
    const params = new HttpParams()
      .set('q', `intitle:${searchTerm}`)
      .set('maxResults', '20');

    return this.http
      .get<IKind>(`${this.GOOGLE_BOOKS_API_URL}/volumes`, { params })
      .pipe(
        map((response: IKind) => {
          return response.items || [];
        }),
        catchError((error) => {
          throw error;
        })
      );
  }
}
