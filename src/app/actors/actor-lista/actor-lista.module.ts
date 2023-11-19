import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListaComponent } from './actor-lista.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [ActorListaComponent],
  exports: [ActorListaComponent]
})
export class ActorListaModule { }
