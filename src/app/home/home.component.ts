import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  skills : boolean = false
  contact_us : boolean = false

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
    onWindowScroll() {
      
      if(window.pageYOffset>400){
        this.skills=true
      }
      else{
        this.skills=false
      }
      if (window.pageYOffset>900){
        setTimeout(() => {
          this.contact_us=true          
        }, 3000);

      } 
      else{
       
        this.contact_us=false
      }
      
    }
  }
