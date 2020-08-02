import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_model';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getInventory(pageNo: number, size: number): Observable<Product[]> {
    const uri = `${env.product_api}/v1/product?page=${pageNo}&size=${size}`;

    return this.http.get<Product[]>(uri);
  }
}
