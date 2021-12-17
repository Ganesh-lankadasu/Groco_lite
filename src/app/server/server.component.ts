import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  posts:any;

  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.common.getPosts().subscribe((res)=>{
      console.log(res);
      this.posts=res.products;
    })
  }

  formdata = new FormGroup({
    'name':new FormControl(),
    'product':new FormControl(),
    'weight':new FormControl(),
    'price':new FormControl(),
    'image':new FormControl()
  })

  Senddata(){
    const postdata = new FormData();
    postdata.append('name',this.formdata.value.name);
    postdata.append('product',this.formdata.value.product);
    postdata.append('weight',this.formdata.value.weight);
    postdata.append('price',this.formdata.value.price);
    postdata.append('image',this.formdata.value.image);

    this.common.Sendpost(postdata).subscribe((res)=>{
      console.log(res);
      this.formdata.reset();
      this.common.getPosts().subscribe((res)=>{
        this.posts=res.products;
      })
    });

 
    

  }


  deletepost(id:any){
    this.common.deletepost(id).subscribe((res)=>{
      console.log(res);
    });

    this.common.getPosts().subscribe((res)=>{
      this.posts=res.products;
    })
    
  }

  imagepicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.formdata.patchValue({'image':file});
    this.formdata.get('image').updateValueAndValidity();
    console.log(this.formdata);

  }

}
