import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '../../../node_modules/@angular/router';
import { NotificationService } from '../notification.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  name:String='Shop Now';
  items=[];
  localitems:any[]=[]

  constructor(private common:CommonService,
  private router:Router,
  private notifyService : NotificationService) { }

  ngOnInit(): void {

    this.localitems = JSON.parse(localStorage.getItem('products'));

    this.common.getPosts(10,1).subscribe((res)=>{
      console.log(res);
      this.items=res.products;
    })
  }

  allproducts(){
    this.router.navigate(['/allproducts'])

  }

  addtocart(product){
   this.localitems.push(product);
    localStorage.setItem('products',JSON.stringify(this.localitems));
    this.notifyService.showSuccess(product.name + ' ' + 'added in the cart')
    
  }

}
