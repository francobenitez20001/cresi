import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { PuntajesComponent } from "./puntajes/puntajes.component";
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderComponent,MenuComponent,PuntajesComponent],
  exports:[HeaderComponent,MenuComponent,PuntajesComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
