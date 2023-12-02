import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorService } from '../actor.service';
import { PeliculaService } from '../../pelicula/pelicula.service';
import { Actor } from '../actor';
import { Movie } from '../../pelicula/pelicula';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
    private peliculaService: PeliculaService,
    private toastrService: ToastrService,
    private router: Router
  ) { }



  asociarActorPelicula(idActor: string, idPelicula: string) {
    if (idActor && idPelicula) {
      this.actorService.asociarActorPelicula(idPelicula, idActor).subscribe({
        next: (response) => {
          this.toastrService.success('Actor asociado con éxito a la película', 'Éxito');
          this.router.navigate(['/actores']);
          console.log(response);
        },
        error: (error) => {
          this.toastrService.error('Error al asociar el actor con la película', 'Error');
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
