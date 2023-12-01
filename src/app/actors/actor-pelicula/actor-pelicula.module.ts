import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ActorAsociarPeliculaComponent } from './actor-pelicula.component';
import { ActorService } from '../actor.service';
import { PeliculaService } from '../../pelicula/pelicula.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ActorAsociarPeliculaComponent
  ],
  providers: [
    ActorService, 
    PeliculaService
  ],
  exports: [
    ActorAsociarPeliculaComponent
  ]
})
export class ActorPeliculaModule { }
