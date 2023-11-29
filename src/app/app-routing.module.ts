import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorListaComponent } from './director/director-lista/director-lista.component';
import { DirectorDetalleComponent } from './director/director-detalle/director-detalle.component';
import { GeneroListaComponent } from './genero/genero-lista/genero-lista.component';
import { HomeComponent } from './home/home.component';
import { ActorListaComponent } from './actors/actor-lista/actor-lista.component';
import { ActorDetalleComponent } from './actors/actor-detalle/actor-detalle.component';
import { GeneroCrearComponent } from './genero/genero-crear/genero-crear.component';
import { PlataformaComponent } from './plataforma/plataforma.component';
import { PlataformaAsociarPeliculaComponent } from './plataforma/plataforma-asociar-pelicula/plataforma-asociar-pelicula.component';
import { ActorCrearComponent } from './actors/actor-crear/actor-crear.component';
import { DirectorCrearComponent } from './director/director-crear/director-crear.component';

const routes: Routes = [
  { path: 'directores', component: DirectorListaComponent },
  { path: 'directores/crear', component: DirectorCrearComponent },
  { path: 'directores/:id', component: DirectorDetalleComponent },
  { path: 'generos', component: GeneroListaComponent },
  { path: 'actores', component: ActorListaComponent },
  { path: 'plataformas', component: PlataformaComponent},
  { path: 'plataformas/asociarPelicula', component: PlataformaAsociarPeliculaComponent},
  { path: 'actores/:id', component: ActorDetalleComponent },
  { path: 'crear-actor', component: ActorCrearComponent },
  { path: 'home',component: HomeComponent},
  { path: 'generos/crear',component: GeneroCrearComponent},
  { path: '',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
