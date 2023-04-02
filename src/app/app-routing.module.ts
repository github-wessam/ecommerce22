import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { ProductDetailsComponent } from './features/products/product/product-details/product-details.component';
import { ProductsViewComponent } from './features/products/products-view.component';
import { WishlistViewComponent } from './features/wishlist/wishlist-view.component';
import { CategoriesViewComponent } from './features/products/categories-view/categories-view.component';

const routes: Routes = [
  { path: 'products', component: ProductsViewComponent },
  { path: 'categories', component: CategoriesViewComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'wishlist', component: WishlistViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // Redirect to 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
