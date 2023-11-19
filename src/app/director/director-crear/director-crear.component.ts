import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DirectorService } from '../director.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director-crear',
  templateUrl: './director-crear.component.html',
  styleUrls: ['./director-crear.component.css']
})
export class DirectorCrearComponent implements OnInit {
  directorForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private directorService: DirectorService, // Cambia el servicio a DirectorService
    private router: Router
  ) { }

  enviarDatos() {
    if (this.directorForm.valid) {
      const datosDirector = {
        ...this.directorForm.value,
        // Aquí puedes formatear los datos si es necesario
      };

      this.directorService.crearDirector(datosDirector).subscribe({
        next: (res) => {
          // Manejo de la respuesta exitosa
        },
        error: (err) => {
          // Manejo de errores
        }
      });
    } else {
      // Manejo de formulario inválido
    }
  }

  crearDirector(datosDirector: any) {
    if (this.directorForm.valid) {
      this.directorService.crearDirector(datosDirector).subscribe({
        next: (res) => {
          // Manejo de la respuesta
          console.log('Director creado con éxito', res);
          this.router.navigate(['/ruta-a-lista-directores']); // Ajusta esta ruta
        },
        error: (err) => {
          // Manejo de errores
          console.error('Error al crear director', err);
        }
      });
    }
  }

  cancelarCrearDirector() {
    this.router.navigate(['/directores']);
  }

  ngOnInit() {
    this.directorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]], // Solo letras y espacios
      photo: ['', [Validators.required, this.urlValidator]], // Validador personalizado para URL
      nationality: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      birthDate: ['', [Validators.required]], // Asegúrate de que sea una fecha válida
      biography: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]] // Solo letras y espacios
    });
  }

  // Validador personalizado para URL
  urlValidator(control: AbstractControl): ValidationErrors | null {
    const urlPattern = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-\_]+\.[a-zA-Z]{2,5}$/;
    return urlPattern.test(control.value) ? null : { invalidUrl: true };
  }
  
}
