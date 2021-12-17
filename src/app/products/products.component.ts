import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { PageEvent } from '../../../node_modules/@angular/material/paginator';

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
  localitem:any[]=[]

  constructor(private common:CommonService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.common.getPosts(this.productsperpage,this.currentpage).subscribe((res)=>{
      console.log(res);
      this.items=res.products;
      this.isloading = false;
      console.log(this.isloading);
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
    this.localitem.push(product);
    localStorage.setItem('products',JSON.stringify(this.localitem));
  }

}
