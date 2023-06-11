import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Route } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book = new Book();

  id:number = 0;

  coverImage: string = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private readonly seo: SeoService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe((result) => {
      this.book = result;
       this.coverImage = "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=500";

       this.seo.setMetaData(this.book, this.coverImage);
       this.seo.setTitle(this.book);

    });

  }

}
