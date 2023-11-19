import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActivatedRoute } from '@angular/router';
import { GetOneActorByIdService } from './get-actor-detail-by-id.service';
import * as moment from 'moment';

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {

  actorDetail!: Actor;

  constructor(private route: ActivatedRoute,
    private getOneActorByIdService : GetOneActorByIdService) {
  }

  ngOnInit() {
    moment.locale('es');
    const idSelectedActor = this.route.snapshot.paramMap.get('id');
    if (idSelectedActor) {
      console.log("idSelectedActor:",idSelectedActor);
      this.getOneActorByIdService.oneActorWithId(idSelectedActor).subscribe(actor => {
        this.actorDetail = actor;
        this.actorDetail.formattedBirthDate = moment(actor.birthDate).format('D [de] MMMM [de] YYYY');
      });
    }
  }

}
