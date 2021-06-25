import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FoodComponent } from './food/food.component';


const routes: Routes = [
  { path: 'drinks', redirectTo: '/inventory/drinks' },
  { path: 'food', redirectTo: '/inventory/food' },
  { path: 'inventory', component: InventoryComponent,
    children: [
      { path: 'drinks', component: DrinksComponent },
      { path: 'food', component: FoodComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
