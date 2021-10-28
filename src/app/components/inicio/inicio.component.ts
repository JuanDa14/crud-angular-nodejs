import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public respuesta: any = [];

  constructor(private servicio: ServicioService) {}

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData() {
    this.servicio
      .get(`http://localhost:3001/personajes`)
      .subscribe((respuesta) => {
        this.respuesta = respuesta;
      });
  }
  eliminarPersonaje(id: string) {
    this.servicio
      .delete(`http://localhost:3001/personajes/${id}`)
      .subscribe((respuesta) => {
        this.cargarData();
      });
  }
}
