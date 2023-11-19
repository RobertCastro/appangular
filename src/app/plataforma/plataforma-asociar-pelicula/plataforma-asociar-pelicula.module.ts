import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlataformaAsociarPeliculaComponent } from './plataforma-asociar-pelicula.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [PlataformaAsociarPeliculaComponent],
  exports: [PlataformaAsociarPeliculaComponent]
})
export class PlataformaAsociarPeliculaModule { }
