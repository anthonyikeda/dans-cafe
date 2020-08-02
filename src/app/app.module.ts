import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular'
import { FormsModule } from '@angular/forms';

import { InventoryComponent } from './inventory/inventory.component';
import { FoodComponent } from './food/food.component';
import { DrinksComponent } from './drinks/drinks.component';
import { RewardsComponent } from './inventory/rewards/rewards.component';

import { initializer } from './_service';
import { StoreComponent } from './store/store.component';
import { HeaderComponent } from './header/header.component';
import { HasRoleDirective } from './_directive/has-role.directive';
import { SalesComponent } from './sales/sales.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    FoodComponent,
    DrinksComponent,
    RewardsComponent,
    StoreComponent,
    HeaderComponent,
    HasRoleDirective,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    KeycloakAngularModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
