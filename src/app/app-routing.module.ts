import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ShopComponent } from 'src/app/shop/shop.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ReviewComponent } from 'src/app/review/review.component';
import { BlogComponent } from 'src/app/blog/blog.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { ServerComponent } from './server/server.component';
import { ProductsComponent } from 'src/app/products/products.component';
import { CartComponent } from 'src/app/cart/cart.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'about',component:AboutComponent},
  {path:'review',component:ReviewComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'server',component:ServerComponent},
  {path:'allproducts',component:ProductsComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
