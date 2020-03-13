import { Component, OnInit } from '@angular/core';
import { RouterState, Router } from '@angular/router';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.page.html',
  styleUrls: ['./ruleta.page.scss'],
})
export class RuletaPage implements OnInit {
  public categoria:string;
  constructor(private router:Router) {
  
  }

  ngOnInit() {
  }

  girar(){
    let ruleta = document.getElementById('ruleta');
    let grados = this.randomNumber(1,360);
    let vuelta = this.randomNumber(3,8);
    console.log(grados);
    ruleta.style.transform = 'rotate('+((vuelta*360)+grados)+'deg)';
    let tiempo = this.randomNumber(3,5);
    ruleta.style.transition = tiempo+'s';
    this.categoria = this.setCategoriaByGrade(grados);
    console.log(this.categoria);
    console.log(vuelta);
    console.log(tiempo);
    setTimeout(()=>{
      this.router.navigate(['/categoria',this.categoria]);
    },tiempo*1100)
  }

  

  randomNumber(min:number,max:number){
    return Math.floor(Math.random() * (max - min) + min);
  }

  setCategoriaByGrade(grado:number){
    let categoria
    if (grado>=330 || grado<=30) {
      categoria = 'proyecto';
    }else if(grado>30 && grado<90){
      categoria = 'prevencion';
    }else if(grado>90 && grado<150){
      categoria = 'salud';
    }else if(grado>150 && grado<210){
      categoria = 'diversidad';
    }else if(grado>210 && grado<270){
      categoria = 'azar';
    }else if(grado>270 && grado<330){
      categoria = 'derecho';
    }
    return categoria;
  }

  

}
