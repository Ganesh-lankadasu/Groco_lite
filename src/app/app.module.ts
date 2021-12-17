import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeadBannerComponent } from './head-banner/head-banner.component';
import { ServerComponent } from './server/server.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductsComponent } from './products/products.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CartComponent } from './cart/cart.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';







@NgModule({
  declarations: [

  
    AppComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    ReviewComponent,
    BlogComponent,
    ContactComponent,
    HeadBannerComponent,
    ServerComponent,
    ProductsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatBadgeModule,
    MatPaginatorModule,
    NgxSkeletonLoaderModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
