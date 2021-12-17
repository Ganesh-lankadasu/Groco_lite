import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  name: string = 'Cart Items';
  cartitems:any[] = [];
  showcart: Boolean;
  emptycart: Boolean;
  quantity = 1;
  deleteitem = false;


  constructor(private common: CommonService,
    private router: Router) { }

  ngOnInit(): void {

    const product = localStorage.getItem('products');

    this.cartitems = JSON.parse(product);

    if (this.cartitems.length === 0) {
      this.showcart = false;
      this.emptycart = true
    }
    else {
      this.showcart = true;
      this.emptycart = false;
    }

  }

  returntoshop() {
    this.router.navigate(['/allproducts']);
  }

  delete(item){
    const itemproducts = JSON.parse(localStorage.getItem('products'));
    console.log(item.name);
    this.deleteitem = true;
    setTimeout(() => {

      itemproducts.splice(itemproducts.findIndex((a:any)=>{
        return a.name === item.name
       }),1)
       localStorage.setItem('products',JSON.stringify(itemproducts));
       this.cartitems = JSON.parse(localStorage.getItem('products'));
       this.deleteitem = false;

       if (this.cartitems.length === 0) {
        this.showcart = false;
        this.emptycart = true
      }
      else {
        this.showcart = true;
        this.emptycart = false;
      }
      
    }, 1000);



  }

  

}
