import { Component, OnInit } from '@angular/core';
import { SalesDatamodel } from './sales.datamodel';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  dataSource: SalesDatamodel;
  columnNames: string[] = ['trans_date', 'trans_date', 'customer_id', 'trans_amount'];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new SalesDatamodel();
  }

}
