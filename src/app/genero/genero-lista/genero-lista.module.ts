import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroListaComponent } from './genero-lista.component';
import { GeneroDetalleModule } from '../genero-detalle/genero-detalle.module';
import { GeneroCrearModule } from '../genero-crear/genero-crear.module';
@NgModule({
  imports: [
    CommonModule,
    GeneroDetalleModule,
    GeneroCrearModule
  ],
  declarations: [GeneroListaComponent],
  exports: [GeneroListaComponent]
})
export class GeneroListaModule { }
