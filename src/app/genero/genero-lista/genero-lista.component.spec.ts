import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { GeneroListaComponent } from './genero-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneroDetalleComponent } from '../genero-detalle/genero-detalle.component';
import { Genero } from '../genero';


describe('GeneroListaComponent', () => {
  let component: GeneroListaComponent;
  let fixture: ComponentFixture<GeneroListaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [GeneroListaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroListaComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 10; i++) {
      const genero = new Genero(faker.lorem.sentence(),[]);
      component.generos.push(genero);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 <li.nav-item> elements', () => {
    expect(debug.queryAll(By.css('li.nav-item'))).toHaveSize(10);
  });

  it('should have 10 <a.nav-link> elements', () => {
    expect(debug.queryAll(By.css('a.nav-link'))).toHaveSize(10);
  });

  it('debe tener el tag a con el genero.type', () => {
    debug.queryAll(By.css('a.nav-link')).forEach((a, i)=>{
      expect(a.nativeElement.textContent).toContain(component.generos[i].type)
    });
  });
  
});
