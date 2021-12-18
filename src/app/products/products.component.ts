import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { PageEvent } from '../../../node_modules/@angular/material/paginator';
import { NotificationService } from '../notification.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  name="Products";
  items:any;
  totalproducts = 30;
  currentpage = 1;
  productsperpage = 8;
  productsizeoptions = [1,2,5,10];
  isloading = true;
  localitem:any[]=[];
  catagoryitem:any;
  isproducts = true;
  isitem = false;
  //showbtn = true;


  constructor(private common:CommonService,
  private notify:NotificationService,
private router:Router) { }

  ngOnInit(): void {
    this.localitem = JSON.parse(localStorage.getItem('products'))
    window.scroll(0,0);
    this.common.getPosts(this.productsperpage,this.currentpage).subscribe((res)=>{
      console.log(res);
      this.items=res.products;
      this.items.forEach((proo)=>{
        proo.addedToCart = false;
      })
      this.isloading = false;
      console.log(this.isloading);
    })

    let items = Array.from(document.querySelectorAll('.catagories-container li'));

    items.forEach((item)=>{
      item.addEventListener('click',()=>{
        items.forEach((itemee)=>{
          itemee.classList.remove('active')
        })
        item.classList.add('active');
      })
    })
  }

  pagechanged(pagedata:PageEvent){
    this.currentpage = pagedata.pageIndex + 1;
    this.common.getPosts(this.productsperpage,this.currentpage).subscribe((res)=>{
      console.log(res);
      this.items=res.products;
      this.isloading = false;
      window.scroll(0,200);
    })

  }

  addtocart(product){
    product.addedToCart = true;
    this.localitem.push(product);
    localStorage.setItem('products',JSON.stringify(this.localitem));
    this.notify.showSuccess(product.name + ' ' + 'added in the cart');
  }

  gotobag(){
    this.router.navigate(['/cart'])
  }

  getitems(itemed){
    this.common.getitems(itemed).subscribe((res)=>{
      console.log(res);
      this.catagoryitem = res;
      this.isproducts = false;
      this.isitem = true;
    })
  }

  getproducts(){

    this.common.getPosts(this.productsperpage,this.currentpage).subscribe((res)=>{
      console.log(res);
      this.items=res.products;
      this.isloading = false;
      console.log(this.isloading);
    })

    this.isproducts = true;
    this.isitem = false;

  }

}
