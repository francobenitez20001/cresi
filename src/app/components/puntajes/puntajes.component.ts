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
    { nombre:'Jorge', apellido:'Mendoza', puntos:'1845', imagen:'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/s960x960/75472833_2528623940546841_8974005797562351616_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=C7zYv96Vpq4AX96eqF3&_nc_ht=scontent-eze1-1.xx&_nc_tp=7&oh=435e8ce73a35c9e76022b01ea43cbf72&oe=5E96C15A'
    },
    { nombre:'Andrés', apellido:'Obregon', puntos:'1145', imagen:'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/82343958_3246177295398673_1112499522979758080_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=JKHL-VS0oKQAX-r-B0d&_nc_ht=scontent-eze1-1.xx&oh=318a284653947022d92b8268dbd342a3&oe=5E965282'
    },
    { nombre:'Roberto', apellido:'Alvarez', puntos:'879', imagen:'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/13522064_1218400721511893_6360243226174226848_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=sZUnVmQEOaIAX_Iky4G&_nc_ht=scontent-eze1-1.xx&oh=0e478f7843b1f20256c0e7d47e5efd8a&oe=5E97EA2B'
    }
  ];

  navigate(component:string){
    this.router.navigate([component]);
  }

  constructor(private router:Router) { }

  ngOnInit() {}

}
