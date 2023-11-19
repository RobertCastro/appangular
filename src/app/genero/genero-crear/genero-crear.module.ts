import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroCrearComponent } from './genero-crear.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [GeneroCrearComponent],
  exports: [GeneroCrearComponent]
})
export class GeneroCrearModule { }
