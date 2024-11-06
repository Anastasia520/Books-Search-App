import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IBook } from '../../models/book.model';
import { selectAllBooks, selectLoading } from '../../store/book/book.selectors';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {
  books$: Observable<IBook[] | undefined>;
  isLoading$!: Observable<boolean>;

  constructor(private store: Store) {
    this.books$ = this.store.select(selectAllBooks);
    this.isLoading$ = this.store.select(selectLoading);
  }
}
