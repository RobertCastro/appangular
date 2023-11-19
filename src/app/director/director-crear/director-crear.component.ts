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
        // Formatear de datos
      };

      this.directorService.crearDirector(datosDirector).subscribe({
        next: (res) => {
          // Manejo de la respuesta
          console.log('Director creado con éxito', res);
          this.router.navigate(['/directores']);
        },
        error: (err) => {
          // Manejo de errores
          console.error('Error al crear director', err);
        }
      });
    } else {
      // Manejo de formulario inválido
    }
  }

  cancelarCrearDirector() {
    this.router.navigate(['/directores']);
  }

  ngOnInit() {
    this.directorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      photo: ['', [Validators.required, this.urlValidator]],
      nationality: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      birthDate: ['', [Validators.required]],
      biography: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
    });
  }

  urlValidator(control: AbstractControl): ValidationErrors | null {
    const urlPattern = /^(http[s]?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
    return urlPattern.test(control.value) ? null : { invalidUrl: true };
  }

  
}
