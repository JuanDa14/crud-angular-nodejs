import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  public respuesta: any = [];
  public form!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private http: ServicioService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((respuesta: any) => {
      const id = respuesta.params.id;
      this.cargarDataOne(id);
    });

    this.form = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      nombrepelicula: [''],
      descripcion: [''],
    });
  }

  cargarDataOne(id: string) {
    return this.http
      .get(`http://localhost:3001/personajes/${id}`)
      .subscribe((respuesta) => {
        this.respuesta = respuesta;
      });
  }
  editarPersonaje(id: string) {
    if (this.form.value.nombre == '') {
      this.form.value.nombre = this.respuesta.nombre;
    }
    if (this.form.value.apellidos == '') {
      this.form.value.apellidos = this.respuesta.apellidos;
    }
    if (this.form.value.nombrepelicula == '') {
      this.form.value.nombrepelicula = this.respuesta.nombre_superheroe;
    }
    if (this.form.value.descripcion == '') {
      this.form.value.descripcion = this.respuesta.descripcion;
    }
    return this.http
      .put(`http://localhost:3001/personajes/${id}`, {
        nombre: this.form.value.nombre,
        apellidos: this.form.value.apellidos,
        nombre_superheroe: this.form.value.nombrepelicula,
        descripcion: this.form.value.descripcion,
      })
      .subscribe((respuesta) => {
        alert('Personaje Editado uwu');
        this.cargarDataOne(id);
      });
  }
}
