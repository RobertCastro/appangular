import { Component, OnInit } from '@angular/core';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-genero-lista',
  templateUrl: './genero-lista.component.html',
  styleUrls: ['./genero-lista.component.css']
})
export class GeneroListaComponent implements OnInit {
  
  generoSeleccionado!: Genero;
  generos: Array<Genero> = [];
  selected = false

  constructor(private generoService: GeneroService) {}

  onSelected(genero: Genero): void {
    this.selected=true;
    this.generoSeleccionado = genero;
    this.generos.forEach((g) => g.active = false);
    genero.active = true;
  }

  getTypes(): void {
    this.generoService.getGeneros().subscribe(
      generos => {
        this.generos = generos.map(g => ({ ...g, active: false, darPelis: () => [] }));
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getTypes();
  }

}
