import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorListaComponent } from './director-lista.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [DirectorListaComponent],
  exports: [DirectorListaComponent]
})
export class DirectorListaModule { }
