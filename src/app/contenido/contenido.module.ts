import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';



@NgModule({
  declarations: [
    InfoPersonalComponent,
    ExperienciaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoPersonalComponent,
    ExperienciaComponent
  ]
})
export class ContenidoModule { }
