import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from 'src/app/product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public cart:any[] = [];
  public products = new BehaviorSubject([])

  constructor(private http:HttpClient) { }

  getPosts(productsperpage?:number,page?:number){
    const queryparams = `?pagesize=${productsperpage}&page=${page}`
    return this.http.get<{message:string,products:Array<Product>}>('http://localhost:3000/api/posts'+queryparams);
  }

  Sendpost(post){
    return this.http.post('http://localhost:3000/api/post',post)

  }

  deletepost(id){
    return this.http.delete<{message:string}>('http://localhost:3000/api/post/' + id)
  }

  addtocart(product){
    this.cart.push(product);
    console.log(this.cart);
    this.products.next(this.cart);
    console.log(this.products);

  }

  getproducts(){
    return this.products;
  }
}
