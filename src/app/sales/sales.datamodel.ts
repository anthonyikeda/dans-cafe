import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Transaction } from './transaction.model';
import { Observable, BehaviorSubject } from 'rxjs';

export class SalesDatamodel implements DataSource<Transaction> {

  private current: Transaction[] = [];
  private transaction$ = new BehaviorSubject<Transaction[]>(this.current);
  private loading$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  connect(collectionViewer: CollectionViewer): Observable<Transaction[] | readonly Transaction[]> {
    return this.transaction$.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.transaction$.complete();
    this.loading$.complete();
  }

}
