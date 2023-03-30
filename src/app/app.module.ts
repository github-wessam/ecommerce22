import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsService } from './features/products/products.service';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Apollo
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';

// Feature modules
import { ProductsModule } from './features/products/products.module';
import { HeaderComponent } from './features/main-layout/header/header.component';

// PrimeNG modules
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

import { WishlistService } from './shared/wishlist.service';
import { LoginComponent } from './features/login/login.component';
import { WishlistViewComponent } from './features/wishlist/wishlist-view.component';
import { WishlistItemComponent } from './features/wishlist/wishlist-item/wishlist-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    WishlistViewComponent,
    WishlistItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    CommonModule,
    ProductsModule,
    HttpClientModule,
    ApolloModule,
    BadgeModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
  ],
  providers: [
    WishlistService,
    ProductsService,
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://webshop.hasura.app/v1/graphql',
            headers: new HttpHeaders({
              "x-hasura-admin-secret": "6sftAV4UtDQ6V26v1p4U4mDAS8eXiDDnBo62JFsQbdTjksQQjcF54reBmrA2p7Jl"
            }),
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
