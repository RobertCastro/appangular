import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectorCrearComponent } from './director-crear.component';

@NgModule({
  declarations: [
    DirectorCrearComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DirectorCrearComponent
  ]
})
export class DirectorCrearModule { }
