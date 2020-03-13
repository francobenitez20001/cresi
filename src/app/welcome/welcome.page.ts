import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router:Router,private menuCtrl:MenuController) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  navigation(component:string){
    this.router.navigate([component]);
  }

}
