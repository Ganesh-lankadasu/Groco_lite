import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-head-banner',
  templateUrl: './head-banner.component.html',
  styleUrls: ['./head-banner.component.css']
})
export class HeadBannerComponent implements OnInit {

  @Input() name;
  subname=[]


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.subname=this.name.split(' ')[0];
    console.log(this.subname)

  }

  gotohome(){
    this.router.navigate(['/home']);
  }

}
