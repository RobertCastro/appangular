import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorService } from '../actor.service';
import { PeliculaService } from '../../pelicula/pelicula.service';
import { Actor } from '../actor';
import { Movie } from '../../pelicula/pelicula';

@Component({
  selector: 'app-actor-asociar-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorAsociarPeliculaComponent implements OnInit {
  asociarForm!: FormGroup;
  actores: Array<Actor> = [];
  peliculas: Array<Movie> = [];

  constructor(
    private formBuilder: FormBuilder,
    private actorService: ActorService,
    private peliculaService: PeliculaService
  ) { }

  asociarActorPelicula(idActor: string, idPelicula: string) {
    if (idActor && idPelicula) {
      this.actorService.asociarActorPelicula(idPelicula, idActor).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
      console.error('Actor o película no encontrados');
    }
  }
  
  getActors() {
    this.actorService.getActores().subscribe(actores => {
      this.actores = actores;
    });
  }

  getMovies() {
    this.peliculaService.getPeliculas().subscribe(peliculas => {
      this.peliculas = peliculas;
    });
  }

  ngOnInit() {
    this.asociarForm = this.formBuilder.group({
      actor: ['', [Validators.required]],
      pelicula: ['', [Validators.required]]
    });
    this.getActors();
    this.getMovies();
  }
}
