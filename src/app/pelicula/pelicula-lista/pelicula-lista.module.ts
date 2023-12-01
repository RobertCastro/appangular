import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaListaComponent } from './pelicula-lista.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PeliculaListaComponent],
  exports: [PeliculaListaComponent]
})
export class PeliculaListaModule { }
