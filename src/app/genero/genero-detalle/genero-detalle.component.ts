import { Component, OnInit,Input } from '@angular/core';
import { Genero } from '../genero';
import { Movie } from '../genero';
import { GeneroService } from '../genero.service';



@Component({
  selector: 'app-genero-detalle',
  templateUrl: './genero-detalle.component.html',
  styleUrls: ['./genero-detalle.component.css']
})
export class GeneroDetalleComponent implements OnInit {

  @Input() generoSeleccionado!:Genero;
  
  
  constructor(private generoService: GeneroService) { }

  getGenero() {
  }

  ngOnInit() {
  }

  darPelisOrdenadas(genero:Genero):Movie[]{
    return genero.movies.sort((a,b)=>b.popularity-a.popularity);
  }


}
