import { InicioComponent } from './components/inicio/inicio.component';
import { EditarComponent } from './components/editar/editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './components/crear/crear.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'editar/:id',
    component: EditarComponent,
  },
  {
    path: 'crear',
    component: CrearComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
