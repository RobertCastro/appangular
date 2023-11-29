//para ejecutar el test: ng test --include=**/plataforma-asociar-pelicula.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Add this import
import { RouterTestingModule } from '@angular/router/testing'; // Add this import

import { PlataformaAsociarPeliculaComponent } from './plataforma-asociar-pelicula.component';
import { PlataformaService } from '../plataforma.service';
import { PeliculaService } from 'src/app/pelicula/pelicula.service';

describe('PlataformaAsociarPeliculaComponent', () => {
  let component: PlataformaAsociarPeliculaComponent;
  let fixture: ComponentFixture<PlataformaAsociarPeliculaComponent>;
  let debug: DebugElement;
  let servicePlataforma: PlataformaService; // Add this
  let servicePelicula: PeliculaService; // Add this

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, RouterTestingModule], // Include ReactiveFormsModule and RouterTestingModule
      declarations: [PlataformaAsociarPeliculaComponent],
      providers: [PlataformaService,PeliculaService], // Add service provider if necessary
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaAsociarPeliculaComponent);
    component = fixture.componentInstance;
    servicePlataforma = TestBed.inject(PlataformaService); // Add service if necessary
    servicePelicula = TestBed.inject(PeliculaService); // Add service if necessary
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Asociar button', () => {  
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('[data-test-id="asociarPlataformaPelicula"]')!;
    expect(button.textContent).toEqual(jasmine.stringMatching(/Asociar/));
  });

  it('should have a Pelicula input', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const input = bannerElement.querySelector('[data-test-id="inputsPelicula"]')!;
    expect(input).toBeTruthy();
  });
  
  it('should have a Plataforma input', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const input = bannerElement.querySelector('[data-test-id="inputsPlataforma"]')!;
    expect(input).toBeTruthy();
  });

});
