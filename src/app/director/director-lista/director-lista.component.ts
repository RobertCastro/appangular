import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Director } from '../director';
import { DirectorListaService } from './director-lista.service';
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-director-lista',
  templateUrl: './director-lista.component.html',
  styleUrls: ['./director-lista.component.css']
})
export class DirectorListaComponent implements OnInit {
  
  directores: Array<Director>=[];
  faPlus = faPlus;

  constructor(private directorListaService: DirectorListaService) {}

  ngOnInit() {
    moment.locale('es');
    this.getTypes();
  }
        
  getTypes() {
    this.directorListaService.getGeneros().subscribe(directores => {
      this.directores = directores;

      for (let director of this.directores) {
        director.formattedBirthDate = moment(director.birthDate).format('D [de] MMMM [de] YYYY');
      }
    });
  }
}
