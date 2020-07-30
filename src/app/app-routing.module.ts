import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FoodComponent } from './food/food.component';
import { AuthGuard } from './_guard';
import { StoreComponent } from './store/store.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  { path: '', data: { roles: ['shopper', 'store-owner']}, canActivate: [AuthGuard], children: [
    { path: 'drinks', redirectTo: '/store/drinks' },
    { path: 'food', redirectTo: '/store/food' },
    { path: 'store', component: StoreComponent,
      children: [
        { path: 'drinks', component: DrinksComponent },
        { path: 'food', component: FoodComponent }
      ]
    }
  ]},
  { path: 'admin', data: { roles: ['store-owner']}, canActivate: [AuthGuard], children: [
    { path: 'inventory', component: InventoryComponent },
    { path: 'sales', component: SalesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
