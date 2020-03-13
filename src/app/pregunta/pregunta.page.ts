import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
    console.log(this.categoria);
  }

  public categoria = this.activatedRoute.snapshot.paramMap.get('categoria');
  ngOnInit() {
  }

  respuesta(){
    console.log('click');
    
  }

}
