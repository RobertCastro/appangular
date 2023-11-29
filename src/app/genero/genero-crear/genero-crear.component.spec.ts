//para correr prueba utilizar comando: ng test --include=**/genero-crear.component.spec.ts

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Add this import
import { RouterTestingModule } from '@angular/router/testing'; // Add this import

import { GeneroCrearComponent } from './genero-crear.component';
import { GeneroService } from '../genero.service'; // Import the service if not already imported

describe('GeneroCrearComponent', () => {
  let component: GeneroCrearComponent;
  let fixture: ComponentFixture<GeneroCrearComponent>;
  let debug: DebugElement;
  let service: GeneroService; // Add this

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, RouterTestingModule], // Include ReactiveFormsModule and RouterTestingModule
      declarations: [GeneroCrearComponent],
      providers: [GeneroService], // Add service provider if necessary
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroCrearComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GeneroService); // Add service if necessary
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a create button', () => {  
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('[data-test-id="crear-genero-button-crear"]')!;
    expect(button.textContent).toEqual(jasmine.stringMatching(/Crear/));
    
  });

  it('should have a cancel button', () => {  
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('[data-test-id="crear-genero-button-cancelar"]')!;
    expect(button.textContent).toEqual(jasmine.stringMatching(/Cancel/));
    
  });

  it('should have a input', () => {  
    const bannerElement: HTMLElement = fixture.nativeElement;
    const element = bannerElement.querySelector('[data-test-id="crear-genero-input-tipo"]')!;
    expect(element).toBeTruthy();
    
  });

});
