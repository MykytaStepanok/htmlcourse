import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { PromotionsComponent} from './promotions/promotions.component';
import { DeliveryComponent} from './delivery/delivery.component';
import { ContactsComponent} from './contacts/contacts.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {path: 'pizza', component: ProductsListComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'promotions', component: PromotionsComponent},
  {path: '', redirectTo: '/pizza', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
