import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genero-crear',
  templateUrl: './genero-crear.component.html',
  styleUrls: ['./genero-crear.component.css']
})
export class GeneroCrearComponent implements OnInit {
  generoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private generoService: GeneroService,
    private router: Router
    //private toastr: ToastrService
  ) { }

  crearGenero(tipo:string) {
    console.log(tipo);
    //obtaint tipo value
    const tipo2 = this.generoForm.get('tipo')?.value;
    console.log(tipo2);

    const genero = new Genero(tipo2,[]);
   
    this.generoService.crearGenero(genero).subscribe(genero=>{
      console.info("El genero fue creado: ", genero)
      this.generoForm.reset();

      //al finalizar redirigir a la lista de generos
      this.router.navigate(['/generos']);

      //refresh page
      //window.location.reload();

    

    })

    

  }

  cancelarCrearGenero(){
    this.router.navigate(['/generos']);
  }
  ngOnInit() {
    this.generoForm = this.formBuilder.group({
      tipo: ['', [Validators.required, Validators.maxLength(15)]]
    });
  }

}
