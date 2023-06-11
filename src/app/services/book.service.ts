import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + 'Books');
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + 'Books/'+id);
  }
}
