import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book-service.service';

@Component({
  selector: 'app-book-list',
  template: `
    <h2>Liste des Livres</h2>
    <ul>
      <li *ngFor="let book of books">{{ book.titre }} - {{ book.auteur }}</li>
    </ul>
  `,
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
