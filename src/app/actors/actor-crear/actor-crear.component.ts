import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearActorService } from './crear-actor-service.service';

@Component({
  selector: 'app-actor-crear',
  templateUrl: './actor-crear.component.html',
  styleUrls: ['./actor-crear.component.css']
})
export class ActorCrearComponent implements OnInit {

  actorForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private actorService: CrearActorService) {
    this.actorForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      nationality: ['', [Validators.required, Validators.maxLength(20)]],
      birthDate: ['', Validators.required],
      photo: ['', Validators.required ],
      biography: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  guardarActor() {
    // Lógica para llamar al API REST con el método POST
    // Supongamos que tienes un servicio llamado actorService para manejar la comunicación con la API

    // actorService.guardarActor(this.actorForm.value).subscribe(() => {
    //   this.router.navigate(['/actores']);
    // });

    // Aquí deberías implementar la lógica de llamada a tu API REST

    // Después de guardar, regresar a la página de actores
    this.router.navigate(['/actores']);

    if (this.actorForm.valid) {
      this.actorService.guardarActor(this.actorForm.value).subscribe(() => {
        this.router.navigate(['/actores']);
      });
    }
  }

  cancelar() {
    // Regresar a la página anterior (actores)
    this.router.navigate(['/actores']);
  }

  hasError(controlName: string): boolean {
    const control = this.actorForm.get(controlName);
    console.log(`Error en ${controlName}`);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(controlName: string): string {
    const control = this.actorForm.get(controlName);
  
    if (control && control.hasError('required')) {
      return 'Este campo es obligatorio.';
    }
  
    if (control && control.hasError('maxlength')) {
      return `La longitud máxima permitida es ${control.errors?.maxlength?.requiredLength}.`;
    }
  
    // Agrega más validaciones según sea necesario
  
    return '';
  }


}
