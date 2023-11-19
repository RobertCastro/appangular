import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PlataformaService } from '../plataforma.service';
import { Plataforma } from '../plataforma';
import { Movie } from '../../pelicula/pelicula';
import { PeliculaService } from '../../pelicula/pelicula.service';

@Component({
  selector: 'app-plataforma-asociar-pelicula',
  templateUrl: './plataforma-asociar-pelicula.component.html',
  styleUrls: ['./plataforma-asociar-pelicula.component.css']
})
export class PlataformaAsociarPeliculaComponent implements OnInit {
  plataformaForm!: FormGroup;

  plataformas: Array<Plataforma> = [];
  peliculas: Array<Movie> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private plataformaService: PlataformaService,
    private peliculaService: PeliculaService
  ) { }

  asociarPlataformaPelicula(nombrePlataforma: string, nombrePelicula: string) {
    //se obtienen las plataformas y peliculas del servicio
    
    //se obtiene el id de la plataforma seleccionada
    let idPlataforma: number = 0;
    this.plataformas.forEach(plataforma => {
      if(plataforma.name == nombrePlataforma){
        idPlataforma = plataforma.id;
      }
    });

    //se obtiene el id de la pelicula seleccionada
    let idPelicula: number = 0;
    this.peliculas.forEach(pelicula => {
      if(pelicula.title == nombrePelicula){
        idPelicula = pelicula.id;
      }
    });

    //se asocia la pelicula a la plataforma
    this.plataformaService.asociarPlataformaPelicula(idPelicula, idPlataforma).subscribe(plataforma => {
      this.plataformas.push(plataforma);
      this.plataformaForm.reset();
      window.location.reload();
    });

  }

  getPlatforms() {
    this.plataformaService.getPlatforms().subscribe(plataformas => {
      this.plataformas = plataformas;
    });
  }

  getMovies(){
    this.peliculaService.getPeliculas().subscribe(peliculas => {
      this.peliculas = peliculas;
    });
  }


  ngOnInit() {
    this.plataformaForm = this.formBuilder.group({
      plataforma: ['', [Validators.required, Validators.maxLength(15)]],
      pelicula: ['', [Validators.required, Validators.maxLength(15)]]
    });
    this.getPlatforms();
    this.getMovies();
  }

}
