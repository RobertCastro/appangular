import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { GetAllActorsService } from './get-all-actor.service';
import * as moment from 'moment';
import 'moment/locale/es';
import { RouterModule } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-actor-lista',
  templateUrl: './actor-lista.component.html',
  styleUrls: ['./actor-lista.component.css']
})
export class ActorListaComponent implements OnInit {

  actores: Array<Actor>=[];
  faPlus = faPlus;


  constructor(private getAllActorService: GetAllActorsService) { }

  ngOnInit() {
    moment.locale('es');
    this.allActores();
  }

  allActores() {
    this.getAllActorService.actors().subscribe(actors => {
      this.actores = actors;

      for (let actor of this.actores) {
        actor.formattedBirthDate = moment(actor.birthDate).format('D [de] MMMM [de] YYYY');
        console.log(actor.id);
      }
    });
  }

}
