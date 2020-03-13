import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.scss'],
})
export class PuntajesComponent implements OnInit {

  public usuarios:any = [
    { nombre:'Franco', apellido:'Benitez', puntos:'1885', imagen:'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/45401820_1593472890798376_2447605581708525568_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=66OAMUQgZAcAX_7drWJ&_nc_ht=scontent-eze1-1.xx&oh=19f79365e883770abf6f79535130e84d&oe=5E904745'
    },
    { nombre:'Jorge', apellido:'Mendoza', puntos:'1845', imagen:'https://www.facebook.com/search/async/profile_picture/?fbid=100001977790768&width=72&height=72'
    },
    { nombre:'Andrés', apellido:'Obregon', puntos:'1145', imagen:'https://www.facebook.com/search/async/profile_picture/?fbid=100000193045407&width=72&height=72'
    },
    { nombre:'Roberto', apellido:'Alvarez', puntos:'879', imagen:'https://www.facebook.com/search/async/profile_picture/?fbid=100000259301993&width=72&height=72'
    }
  ];

  navigate(component:string){
    this.router.navigate([component]);
  }

  constructor(private router:Router) { }

  ngOnInit() {}

}
