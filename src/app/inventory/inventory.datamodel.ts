import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Product } from '../_model';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { InventoryService } from '../_service';
import{ catchError, finalize } from 'rxjs/operators';

export class InventoryDatamodel implements DataSource<Product> {

  private current: Product[] = [];
  private product$ = new BehaviorSubject<Product[]>(this.current);
  private loading$ = new BehaviorSubject<boolean>(false);

  constructor(private service: InventoryService) {}
  connect(collectionViewer: CollectionViewer): Observable<Product[] | readonly Product[]> {
    return this.product$.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.product$.complete();
    this.loading$.complete();
  }

  getPagedProducts(pageNo: number, size: number): void {
    this.loading$.next(true);

    this.service.getInventory(pageNo, size).pipe(
      catchError(() => of([])),
      finalize(() => this.loading$.next(false))
    )
    .subscribe((response: Product[]) => {
      this.current = response;
      console.log(response);
      this.product$.next(this.current);
    });
  }

}
