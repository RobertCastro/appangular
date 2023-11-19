import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DirectorListaComponent } from './director-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { Director } from '../director';

describe('DirectorListaComponent', () => {
  let component: DirectorListaComponent;
  let fixture: ComponentFixture<DirectorListaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DirectorListaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorListaComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 10; i++) {
      const director = new Director(
        faker.string.uuid(),
        faker.person.firstName(),
        faker.image.avatar(),
        "USA",
        faker.date.past(),
        faker.date.past().toLocaleDateString(),
        faker.lorem.paragraph()
      );
      component.directores.push(director);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 rows of directors', () => {
    const rows = debug.queryAll(By.css('tbody > tr'));
    expect(rows).toHaveSize(10);
  });

  it('the first row should have a link around the actor\'s photo', () => {
    const linkWithImage = debug.query(By.css('tbody > tr:first-child > th > a > img'));
    expect(linkWithImage).toBeTruthy();
  });
  
  it('should display director photo, name, nationality, and birthdate', () => {
    const rows = debug.queryAll(By.css('tbody > tr'));
    for (let i = 0; i < rows.length; i++) {
      const columns = rows[i].queryAll(By.css('th'));
      const image = columns[0].query(By.css('img'));
      const name = columns[1].nativeElement.textContent.trim();
      const nationality = columns[2].nativeElement.textContent.trim();
      const birthdate = columns[3].nativeElement.textContent.trim();
      
      expect(image.nativeElement.src).toContain(component.directores[i].photo);
      expect(name).toEqual(component.directores[i].name);
      expect(nationality).toEqual(component.directores[i].nationality);
      expect(birthdate).toEqual(component.directores[i].formattedBirthDate);
    }
  });

  
});
