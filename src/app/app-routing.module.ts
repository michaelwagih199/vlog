import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderMagazineComponent } from './order-magazine/order-magazine.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent},
  { path: 'create-order', component: OrderMagazineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
