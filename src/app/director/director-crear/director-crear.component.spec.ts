import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DirectorCrearComponent } from './director-crear.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DirectorService } from '../director.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('DirectorCrearComponent', () => {
  let component: DirectorCrearComponent;
  let fixture: ComponentFixture<DirectorCrearComponent>;
  let directorServiceMock: any;
  let routerMock: any;

  beforeEach(async () => {
    directorServiceMock = jasmine.createSpyObj('DirectorService', ['crearDirector']);
    directorServiceMock.crearDirector.and.returnValue(of({})); // Simular una respuesta Observable
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ DirectorCrearComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        FormBuilder,
        { provide: DirectorService, useValue: directorServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize directorForm on ngOnInit', () => {
    component.ngOnInit();
    expect(component.directorForm).toBeDefined();
    expect(component.directorForm.get('name')).toBeDefined();
    expect(component.directorForm.get('photo')).toBeDefined();
    expect(component.directorForm.get('nationality')).toBeDefined();
    expect(component.directorForm.get('birthDate')).toBeDefined();
    expect(component.directorForm.get('biography')).toBeDefined();
  });

  it('should call crearDirector if form is valid', fakeAsync(() => {
    component.directorForm.controls['name'].setValue('NombredelDirector');
    component.directorForm.controls['photo'].setValue('http://example.com/photo.jpg');
    component.directorForm.controls['nationality'].setValue('Nacionalidad');
    component.directorForm.controls['birthDate'].setValue('30/11/2023');
    component.directorForm.controls['biography'].setValue('Biografia del director');

    expect(component.directorForm.valid).toBeTruthy();

    component.enviarDatos();
    tick();

    expect(directorServiceMock.crearDirector).toHaveBeenCalled();
  }));

  it('cancelarCrearDirector should navigate to /directores', () => {
    component.cancelarCrearDirector();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/directores']);
  });

});
