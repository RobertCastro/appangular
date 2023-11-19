import { Component, OnInit } from '@angular/core';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-genero-lista',
  templateUrl: './genero-lista.component.html',
  styleUrls: ['./genero-lista.component.css']
})
export class GeneroListaComponent implements OnInit {
  
  selected: Boolean=false;
  generoSeleccionado!:Genero;

  generos: Array<Genero>=[];

  constructor(private generoService: GeneroService) {}
        
  onSelected(genero: Genero):void{
    this.selected=true;
    this.generoSeleccionado=genero;
  }

  getTypes() {
    this.generoService.getGeneros().subscribe(generos => {
      this.generos = generos;
    });
  }

  ngOnInit() {
    this.getTypes();
  }

}
