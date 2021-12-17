import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { Width } from '../../node_modules/ngx-owl-carousel-o/lib/services/carousel.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router:Router){

  }




  ngOnInit(){

    AOS.init();

    let menu=document.getElementById('menu-btn') as HTMLElement;
    let navbar=document.getElementsByClassName('navbar')[0] as HTMLElement;

    let home=document.getElementById('home') as HTMLElement;
    let shop=document.getElementById('shop') as HTMLElement;
    let about=document.getElementById('about') as HTMLElement;

    let arr:Array<HTMLElement>=[menu,home,shop,about];

    arr.forEach((aa)=>{
      aa.addEventListener('click',()=>{
        navbar.classList.toggle('active');
        menu.classList.toggle('fa-times');
      })
    })

    // menu.addEventListener('click',()=>{
    //   navbar.classList.toggle('active');
    //   menu.classList.toggle('fa-times');
    // });

    // menu.addEventListener('click',()=>{
    //   navbar.classList.toggle('active');
    // })
    // shop.addEventListener('click',()=>{
    //   navbar.classList.toggle('active');
    // })
    // about.addEventListener('click',()=>{
    //   navbar.classList.toggle('active');
    // })

    let search=document.getElementById('search-btn') as HTMLElement;
    let searchOpen=document.getElementsByClassName('search')[0] as HTMLElement;

    search.addEventListener('click',()=>{
      searchOpen.classList.toggle('active');
    });

    let go=document.getElementsByClassName('go')[0] as HTMLElement;

    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > 240){
        go.classList.add('active');
      }
      else{
        go.classList.remove('active');
      }
    })

    let darkmode=document.getElementsByClassName('fa-adjust')[0] as HTMLElement;

    darkmode.addEventListener('click',()=>{
      document.body.classList.toggle('darkmode')
    })

    

    let user=document.getElementById('login-btn') as HTMLElement;
    let login=document.getElementsByClassName('login')[0] as HTMLElement;

    user.addEventListener('click',()=>{
      login.classList.toggle('active')  
    })


  }

  cart(){
    this.router.navigate(['/cart'])
  }

  goup(){
    window.scroll(0,0);
  }

  


}
