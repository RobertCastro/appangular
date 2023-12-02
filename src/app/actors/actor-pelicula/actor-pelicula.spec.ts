import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { ActorAsociarPeliculaComponent } from './actor-pelicula.component';
import { ActorService } from '../actor.service'; 
import { PeliculaService } from '../../pelicula/pelicula.service';

describe('AsociarActorPeliculaComponent', () => {
  let component: ActorAsociarPeliculaComponent;
  let fixture: ComponentFixture<ActorAsociarPeliculaComponent>;
  let toastrService: ToastrService; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
        ToastrModule.forRoot()
      ],
      declarations: [ ActorAsociarPeliculaComponent ],
      providers: [
        ActorService,
        PeliculaService,
        ToastrService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorAsociarPeliculaComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Asociar button', () => {
    const button = fixture.debugElement.query(By.css('button[data-test-id="asociar"]'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent).toContain('Asociar');
  });

  it('should have an Actor input', () => {
    const input = fixture.debugElement.query(By.css('select[data-test-id="actor"]'));
    expect(input).toBeTruthy();
  });

  it('should have a Pelicula input', () => {
    const input = fixture.debugElement.query(By.css('select[data-test-id="pelicula"]'));
    expect(input).toBeTruthy();
  });

});
