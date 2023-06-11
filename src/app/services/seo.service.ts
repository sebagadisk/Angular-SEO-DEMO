import { Injectable } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly appTitle = "Book App";
  private readonly appDescription = "The largest book store for buying and renting!";

  constructor(private readonly metaTagService: Meta, private readonly titleService: Title) { }

  initDefaultMetaInformation(): void {
    this.titleService.setTitle(this.appTitle);

    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
    ]);
  }

  updateMetaInformationForPage(book: Book): void {
    this.metaTagService.updateTag(
      { name: 'keywords', content: `${book.title}, ${book.excerpt}` }
    );

    this.metaTagService.updateTag(
      { name: 'description', content: `Details of Book # ${book.id}: ${book.description}` }
    )
  }

  setTitle(book?: Book): void {
    const title = book ? `${book.title}` : this.appTitle;
    this.titleService.setTitle(title);
  }

  setMetaData(book?: Book, coverImage?: string): void {
    const title = book ? `${book.title}` : this.appTitle;
    const description = book ? `Description of Book # ${book.id} : ${book.description}` : this.appDescription;
    const image = coverImage ? coverImage : '';
    const keywords = book ? `${book.id}: ${book.title}, ${book.excerpt}` : '';

    const tags = [
      { name: 'title', content: title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: image },
    ];

    tags.forEach(tag => this.metaTagService.updateTag(tag))

  }
}
