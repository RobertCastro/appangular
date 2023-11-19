import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlataformaComponent } from './plataforma.component';
import { PlataformaAsociarPeliculaModule } from './plataforma-asociar-pelicula/plataforma-asociar-pelicula.module';
//import { PlataformaCrearComponent } from './plataforma-crear/plataforma-crear.component';
@NgModule({
  imports: [
    CommonModule,
    PlataformaAsociarPeliculaModule
  ],
  declarations: [PlataformaComponent],
  exports: [PlataformaComponent]
})
export class PlataformaModule { }
