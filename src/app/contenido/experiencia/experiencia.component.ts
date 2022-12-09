import { Component } from '@angular/core';

import { Experiencia } from './experiencia.model';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {id: 1, titulo: "Backend Developer", lugar: "Google", f_inicio:"marzo 2019", f_fin: "diciembre 2021", img: "ordenador.png"},
    {id: 2, titulo: "Frontend Developer", lugar: "Uala", f_inicio:"marzo 2017", f_fin: "diciembre 2018", img: "graduado.png"},
    {id: 3, titulo: "QA", lugar: "Uala", f_inicio:"marzo 2017", f_fin: "diciembre 2018", img: "ordenador.png"}
  ];

  expSeleccionada: Experiencia = new Experiencia();

  agregarOEditar(){
    if(this.expSeleccionada.id === 0){
      this.expSeleccionada.id = this.experiencias.length + 1;
      this.experiencias.push(this.expSeleccionada);
    }
    this.expSeleccionada = new Experiencia();
  }

  abrirEditar(producto: Experiencia){
    this.expSeleccionada = producto;
  }

  eliminar(){
    this.experiencias = this.experiencias.filter(x => x != this.expSeleccionada);
    this.expSeleccionada = new Experiencia();
  }
}
