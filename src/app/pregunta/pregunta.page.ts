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
  public verInfo = false;
  public time = 15;
  public intervalo;

  public showRespuestaIncorrecto = false;//para mostrar 'correcto o incorrecto' cuando clickee sobre una opcion
  public showRespuestaCorrecto = false;
  public respuestaStatus:string; //correcto o incorrecto

  reloj() {
    this.time = this.time - 1;
  }

  respuesta(respuesta,respuestaCorrecta){
    clearInterval(this.intervalo);
    if (respuesta == respuestaCorrecta) {
      this.showRespuestaCorrecto = true;
      this.respuestaStatus = 'Correcto';
      // let alertRespuesta = document.getElementById('respuesta');
      // alertRespuesta.classList.add('correcto');//le agrego la clase correcto para que se vea en verde
      setTimeout(() => {
        this.showInfo();
      }, 1500);
      return true;
    }
    this.showRespuestaIncorrecto = true;
    this.respuestaStatus = 'Incorrecto';
    // let alertRespuesta = document.getElementById('respuesta');
    // alertRespuesta.classList.add('incorrecto')//le agrego la clase incorrecto para que se vea en rojo
    setTimeout(() => {
      this.showInfo();
    }, 1500);
    return false;
  }

  showInfo(){
    this.showRespuestaCorrecto = false;
    this.showRespuestaIncorrecto = false;
    let divRespuestas = document.getElementById('respuestas');
    divRespuestas.classList.add('ocultarRespuesta');
    setTimeout(() => {
      this.verInfo = true;
    },500);
  }

  ngOnInit() {
    //descontar un segundo en el cronometro
    this.intervalo = setInterval(()=>{
      this.reloj()
    },1000)

    //en el caso de que no haya contestado a tiempo, destruyo ese temporizador
    setTimeout(() => {
      clearInterval(this.intervalo);
      this.showInfo();
    }, 15500);
  }
}
