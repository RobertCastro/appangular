import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroDetalleComponent } from './genero-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GeneroDetalleComponent],
  exports: [GeneroDetalleComponent]
})
export class GeneroDetalleModule { }
