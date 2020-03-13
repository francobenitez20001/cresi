import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  navigate(component:string){
    this.router.navigate([component])
  }

  constructor(private router:Router) { }

  ngOnInit() {}

}
