import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { GeneroDetalleComponent } from './genero-detalle.component';
import { Genero } from '../genero';
import { Movie } from '../genero';


describe('GeneroDetalleComponent', () => {
  let component: GeneroDetalleComponent;
  let fixture: ComponentFixture<GeneroDetalleComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [GeneroDetalleComponent],
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroDetalleComponent);
    component = fixture.componentInstance;
    const movies = [];
    
    

    for (let i = 0; i < 10; i++) {
      const movie = new Movie(i, faker.lorem.word(), faker.image.url(), faker.number.int(), faker.lorem.word(), faker.date.recent(), faker.number.int({ min: 1, max: 5 }));
      movies.push(movie);
    }
    const genero = new Genero(faker.lorem.word(),movies);
    

    component.generoSeleccionado = genero;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 card container', () => {
    const innerHTML = fixture.nativeElement.innerHTML;
    expect(debug.queryAll(By.css('div.card-container')).length).toBe(1);
  });

  it('should have 10 div.card-body', () => {
    const innerHTML = fixture.nativeElement.innerHTML;
    //console.log("HTML: " + innerHTML);
    expect(debug.queryAll(By.css('div.card-body')).length).toBe(10);
  });

  it('should have 10 card-title', () => {
    const innerHTML = fixture.nativeElement.innerHTML;
    //console.log("HTML: " + innerHTML);
    expect(debug.queryAll(By.css('h5.card-title')).length).toBe(10);
  });

  it('should have h5 tag with the movie.title', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.generoSeleccionado.movies[i].title)
    });
  });

  
});
