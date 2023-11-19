import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorDetalleComponent } from './director-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DirectorDetalleComponent],
  exports: [DirectorDetalleComponent]
})
export class DirectorDetalleModule { }
