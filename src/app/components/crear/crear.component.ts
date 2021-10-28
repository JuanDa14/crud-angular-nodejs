import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private http: ServicioService,
    private fromBuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fromBuilder.group({
      nombre: [''],
      apellidos: [''],
      descripcion: [''],
      nombre_superheroe: [''],
    });
  }

  enviarData() {
    return this.http
      .post('http://localhost:3001/personajes', {
        nombre: this.form.value.nombre,
        apellidos: this.form.value.apellidos,
        nombre_superheroe: this.form.value.nombre_superheroe,
        descripcion: this.form.value.descripcion,
      })
      .subscribe((respuesta) => {
        this.route.navigate(['/']);
      });
  }
}
