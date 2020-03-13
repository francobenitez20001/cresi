import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
    console.log(this.categoria);
  }

  public categoria = this.activatedRoute.snapshot.paramMap.get('categoria');

  ngOnInit() {
    setTimeout(()=>{
      let divLogo = document.getElementById('logo');
      divLogo.classList.add('mostrarLogo');
    },100)
  }

 

}
