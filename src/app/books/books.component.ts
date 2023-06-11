import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  coverImage: string = '';

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {

    this.bookService.getBooks().subscribe((result) => {
      this.books = result as Book[];
       this.coverImage = "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=500";

    });

  }

}
