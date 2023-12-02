import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DirectorService } from '../director.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-director-crear',
  templateUrl: './director-crear.component.html',
  styleUrls: ['./director-crear.component.css']
})
export class DirectorCrearComponent implements OnInit {
  directorForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private directorService: DirectorService,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  enviarDatos() {
    if (this.directorForm.valid) {
      const datosDirector = {
        ...this.directorForm.value,
      };

      this.directorService.crearDirector(datosDirector).subscribe({
        next: (res) => {
          this.toastrService.success('Director creado con éxito', 'Éxito');
          this.router.navigate(['/directores']);
        },
        error: (err) => {
          this.toastrService.error('Error al crear el director', 'Error');
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
      biography: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑ]*')]]
    });
  }

  urlValidator(control: AbstractControl): ValidationErrors | null {
    const urlPattern = /^(http[s]?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
    return urlPattern.test(control.value) ? null : { invalidUrl: true };
  }

  
}
