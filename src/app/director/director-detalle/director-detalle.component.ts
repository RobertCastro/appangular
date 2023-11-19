// director-detalle.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirectorDetalleService } from './director-detalle.service';
import { Director } from '../director';
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-director-detalle',
  templateUrl: './director-detalle.component.html',
  styleUrls: ['./director-detalle.component.css']
})
export class DirectorDetalleComponent implements OnInit {

  director!: Director;
  msg = 'Director no encontrado';
  
  constructor(
    private route: ActivatedRoute,
    private directorService: DirectorDetalleService
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.directorService.getDirectorById(id).subscribe(director => {
        this.director = director;
        this.director.formattedBirthDate = moment(director.birthDate).format('D [de] MMMM [de] YYYY');
      });
    } else {
      this.director = {} as Director;
    }
  }

}
