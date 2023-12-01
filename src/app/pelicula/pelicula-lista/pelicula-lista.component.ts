import { Component, OnInit } from '@angular/core';
import { Movie } from '../pelicula';
import { PeliculaListaService } from './pelicula-lista.service';


@Component({
  selector: 'app-pelicula-lista',
  templateUrl: './pelicula-lista.component.html',
  styleUrls: ['./pelicula-lista.component.css']
})
export class PeliculaListaComponent implements OnInit {
  
  peliculas: Array<Movie>=[];

  constructor(private peliculaListaService: PeliculaListaService) {}

  ngOnInit() {
    this.getTypes();
  }
        
  getTypes() {
    this.peliculaListaService.getPeliculas().subscribe(peliculas => {
      this.peliculas = peliculas;

      // for (let director of this.directores) {
      //   director.formattedBirthDate = moment(director.birthDate).format('D [de] MMMM [de] YYYY');
      // }
    });
  }
}
