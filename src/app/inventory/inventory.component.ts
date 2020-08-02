import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryDatamodel } from './inventory.datamodel';
import { InventoryService } from '../_service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  dataSource: InventoryDatamodel;
  columnNames = ['name', 'description', 'type', 'sku'];
  currentPage = 0;
  currentSize = 10;

  constructor(private route: ActivatedRoute, private service: InventoryService) { }

  ngOnInit() {
    console.log('inventory component');
    this.dataSource = new InventoryDatamodel(this.service);
    this.dataSource.getPagedProducts(this.currentPage, this.currentSize);
  }

  nextPage(): void {
    this.currentPage = this.currentPage + 1;
    this.dataSource.getPagedProducts(this.currentPage, this.currentSize);
  }

  prevPage(): void {
    this.currentPage = this.currentPage - 1;
    this.dataSource.getPagedProducts(this.currentPage, this.currentSize);
  }
}
